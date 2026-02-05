export interface Blog {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
  image?: string;
  excerpt?: string;
  content: string;
}

export const blogs: Blog[] = [
  {
    id: 2,
    title: "My experience at Inter IIT Tech Meet 14.0",
    date: "Dec 24, 2025",
    readTime: "3 min read",
    category: "Personal",
    author: "Akhil Dhyani",
    image: "/interiit.jpeg",
    excerpt: "A gold medal winning journey and my learnings from Inter IIT Tech Meet 14.0.",
    content: `Me and my team were playing basketball at the courts of IIT Patna when we got to know the result. Our team had secured the gold medal among 23 IITs in the Pathway problem statement! For a moment I was in disbelief, then a moment later it was euphoria. This was the culmination of over two months of sleepless nights.

## The Beginning

It was the Diwali break I remember, when the problem statement was first released and I was at home, not really sure whether I would even get selected. The problem statement was titled **‘Financial agents that work with real time insights’**. It demanded us to build a production grade system that worked on a high throughput and worked with AI agents to assist the system aiming at solving problems at financial institutions, including fraud detection, KYC management and even investment decisions.

I nonetheless joined the selection process. In the final meet, our domain leads gave us the full freedom to choose a team amongst ourselves. In the end, I was selected in the final team. Still unsure where this path would lead, I decided to march on.

## The Grind

The two months of grind was probably the most productive I have ever felt. The days were spent in classes and the nights were spent working in the Tinkering Lab of our college. With a bunch dedicated to solving various problem statements, the environment was nothing short of a startup.

We had our lows. *"Recall is coming 0 for fraud detection! What are we even doing wrong? Oh no, I forgot to zip the front end in the mid term submission!"* But every low made us bounce back ever stronger.

We ended on a strong note in our final submission. Not really caring about our ranks, as we knew the learning and work was beyond our expectations already, we started preparing for our final presentation at IIT Patna.

## The Final Presentation

Even the final presentation wasn’t without any hiccups. The slides kept freezing mid presentation and we had to restart. But we were all glad that it was finally over. Now we just had our fingers crossed for the results. 

There is a fun rule at Inter IIT: you can make contentions against the presentations of other IITs if you figure out some loopholes. So our entire day was spent making contentions against all the nay impossible stuff others sometimes kept saying.

Now we got to chill for a couple of days. We visited Rajgir, a meditation spot of Gautam Buddha. It was a fun experience. While other presentations were going on, we waited patiently for the result day.

## The Result

Back to the basketball court. When the realisation hit, I just jumped on my friends. It was cathartic. Everything had been worth it. 

However, the high lasted only a couple of minutes. Then I was back to normal. All this just for a couple of minutes of hype? Well, that’s how accomplishment works. And I will do it all over again just to experience that couple of minutes again.
`,
  },

  {
    id: 1,
    title: "Building an agentic browser with CrewAI and Playwright",
    date: "Jul 15, 2025",
    readTime: "5 min read",
    category: "Agentic AI",
    author: "Akhil Dhyani",
    image: "/blog.png",
    excerpt: "A beginner's guide to building an agentic browser using CrewAI and Playwright.",
    content: `Have you heard the buzz lately? Perplexity just launched Comet, its agentic browser. It can perform basic browsing tasks autonomously, just like a human would, whether it be clicking, typing or navigating between various pages. The booming era of AI agents is just beginning. It is not really that hard to build an AI agent of your own. In this article, let us try to build one ourselves, using the Python libraries Playwright and CrewAI.

The core idea is simple, Playwright provides functions for automating basic browser functionalities, like clicking or filling input fields. We just need to parse the content of the pages and let the LLM decide what to do next. Based on the decision, it can use tools from Playwright to perform that task.

## Installation

Let us first begin by installing the libraries in your environment.

\`\`\`bash
pip install crewai playwright beautifulsoup4 python-dotenv
playwright install chromium
\`\`\`

Now let us get an api key for powering your agent. Create a .env file with the content as below:

\`\`\`text
OPENAI_API_KEY=sk-proj-your-key-here
OPENAI_MODEL_NAME=gpt-4o
\`\`\`

## Building the Tools

Now let us build the tools that will be used by our agent.

First there should be a tool that lets the agent know about the content of the web page. This tool fetches the page, strips away the junk, and returns a "minified" version of interactive elements so the agent isn't overwhelmed by tokens. We will be using another library here, beautifulsoup4 to scrape page content. Second, there should be tools for interaction with the said page.

\`\`\`python
import os
import json
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
from crewai.tools import tool

load_dotenv()

class BrowserManager:
    def __init__(self):
        self.playwright = sync_playwright().start()
        self.browser = self.playwright.chromium.launch(headless=False)
        self.page = self.browser.new_page()

    @tool("examine_page")
    def examine_page(self, url: str):
        """Navigates to a URL and returns a JSON list of interactive elements."""
        self.page.goto(url)
        # Wait for the page to load fully
        self.page.wait_for_load_state("networkidle")
        
        soup = BeautifulSoup(self.page.content(), 'html.parser')
        elements = []
        
        # We only care about things the agent can actually use
        for e in soup.find_all(['button', 'input', 'a', 'select']):
            elements.append({
                "tag": e.name,
                "id": e.get('id'),
                "class": e.get('class'),
                "text": e.text.strip()[:50], # Limit text to save tokens
                "type": e.get('type')
            })
        
        return json.dumps(elements, indent=2)

    @tool("click_element")
    def click_element(self, selector: str):
        """Clicks an element based on a CSS selector (like #id or .class)."""
        self.page.click(selector)
        return f"Successfully clicked {selector}"

    @tool("input_text")
    def input_text(self, selector: str, text: str):
        """Types text into a specific input field."""
        self.page.fill(selector, text)
        return f"Typed '{text}' into {selector}"
\`\`\`

## Defining the Agent

Now that the tools have been defined. We need to define the actual agent. It is basically equivalent to writing a system prompt, telling the agent what to do.

\`\`\`python
from crewai import Agent

browser_tools = BrowserManager()

navigator_agent = Agent(
    role='Autonomous Web Operator',
    goal='Complete web-based tasks by reading HTML and interacting with elements.',
    backstory="""You are an expert web navigator. You do not guess. 
    You use 'examine_page' to see the current state of the UI, 
    then use 'click_element' or 'input_text' to move toward your goal.""",
    tools=[browser_tools.examine_page, browser_tools.click_element, browser_tools.input_text],
    verbose=True
)
\`\`\`

## Executing the Task

Now that the agent and tools are defined. We finally need to give the agent the task that we want to do.

\`\`\`python
from crewai import Task, Crew

web_mission = Task(
    description="Go to 'https://google.com', search for 'CrewAI', and tell me the title of the first result.",
    expected_output="The title of the first search result.",
    agent=navigator_agent
)

crew = Crew(agents=[navigator_agent], tasks=[web_mission])
result = crew.kickoff()
print(result)
\`\`\`

Voila! Now we have just created an agent that does the browsing for you. Try to give it a more complex task, like filling out a form.

How will you make this better? Try adding a ‘screenshot’ tool to let the agent analyse content visually.
`,
  },
];

export const getBlogById = (id: number) => blogs.find((b) => b.id === id) || null;

export const getAllBlogs = () => blogs;