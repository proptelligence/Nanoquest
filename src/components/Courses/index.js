import {Component} from 'react' 
import {Link} from 'react-router-dom'
import './index.css'
import TabItem from '../TabItem/index'
import AppItem from '../AppItem/index' 
import Navbar11 from '../Navbar11'

const tabsList = [
  {tabId: 'school', displayText: 'K12'},
  {tabId: 'GRADUATION', displayText: 'Graduation'},
  {tabId: 'SKILLS', displayText: 'UpSkills'},
  {tabId: 'FINANCE', displayText: 'Finance'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Mathematics',
    des: 'Basic Math Skills and Concepts. Introduction to Geometry and Shapes. Math Games and Puzzles.',
    dur: 'Enroll',
    category: 'school',
  },
  {
    appId: 1,
    appName: 'Science',
    des: 'Introduction to Science Experiments for Kids. Nature Exploration and Outdoor Learning. Basic Concepts of Biology, Chemistry, and Physics.',
    dur: 'Enroll',
    category: 'school',
  },
  {
    appId: 2,
    appName: 'Computer Science and Technology',
    des: 'Coding for Kids (Scratch, Blockly). Basic Computer Skills. Introduction to Robotics for Kids.',
    dur: '1 hour',
    category: 'school',
  },
  {
    appId: 3,
    appName: 'Social Studies',
    des: 'World Cultures and Geography. Basic History and Historical Figures. Citizenship and Community Awareness.',
    dur: '1 hour',
    category: 'school',
  },
  {
    appId: 4,
    appName: 'Physical Education',
    des: 'Introduction to Sports and Physical Activities. Yoga and Mindfulness for Kids. Fundamental Movement Skills.',
    dur: '1 hour',
    category: 'school',
  },
  {
    appId: 5,
    appName: 'Social and Emotional Learning (SEL)',
    des: 'Emotional Intelligence for Kids. Building Positive Relationships. Conflict Resolution for Children.',
    dur: '1 hour',
    category: 'school',
  },
  {
    appId: 6,
    appName: 'Foreign Languages',
    des: 'Introduction to a Second Language. Basic Conversational Phrases. Cultural Awareness for Kids.',
    dur: '1 hour',
    category: 'school',
  },
  {
    appId: 7,
    appName: 'Environmental Education',
    des: 'Introduction to Environmental Awareness. Recycling and Conservation for Kids. Planting and Gardening Activities.',
    dur: '1 hour',
    category: 'school',
  },
  {
    appId: 8,
    appName: 'Computer Science and Programming',
    des: 'Full Stack Web Development. Python for Data Science and Machine Learning. Java Programming and Software Engineering.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 9,
    appName: 'Business and Finance',
    des: 'Business Administration and Management. Financial Accounting and Analysis. Marketing Strategy and Analytics.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 10,
    appName: 'Data Science and Analytics',
    des: 'Data Science and Big Data Analytics. Business Intelligence and Data Warehousing. Statistical Analysis with R or Python.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 11,
    appName: 'Healthcare and Nursing',
    des: 'Nursing and Patient Care. Healthcare Management. Health Informatics.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 12,
    appName: 'Language and Communication',
    des: 'Professional Writing and Editing. Public Speaking and Communication Skills. Technical Writing Certification.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 13,
    appName: 'Psychology and Counseling',
    des: 'Introduction to Psychology. Counseling Skills and Techniques. Abnormal Psychology.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 14,
    appName: 'Environmental Science',
    des: 'Environmental Science and Sustainability. Climate Change and Policy. Conservation Biology.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 15,
    appName: 'Education and Teaching',
    des: 'Introduction to Education. Classroom Management. Educational Psychology.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 16,
    appName: 'Engineering',
    des: 'Introduction to Mechanical Engineering. Electrical Engineering Fundamentals. Civil Engineering and Infrastructure Development.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 17,
    appName: 'Mathematics and Statistics',
    des: 'Applied Statistics. Linear Algebra and Calculus. Mathematical Modelling.',
    dur: '1 hour',
    category: 'GRADUATION',
  },
  {
    appId: 18,
    appName: 'Critical Thinking and Problem Solving',
    des: 'Puzzle Solving and Brain Games. Logic and Reasoning Skills. Creative Problem-Solving Activities.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 19,
    appName: 'Physical Education',
    des: 'Introduction to Sports and Physical Activities. Yoga and Mindfulness for Kids. Fundamental Movement Skills.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 20,
    appName: 'Social and Emotional Learning (SEL)',
    des: 'Emotional Intelligence for Kids. Building Positive Relationships. Conflict Resolution for Children.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 21,
    appName: 'Life Skills',
    des: 'Basic Cooking and Nutrition for Kids. Personal Hygiene and Health Habits. Time Management and Organizational Skills.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 22,
    appName: 'Language and Literacy',
    des: 'Phonics and Reading Foundations. Storytelling and Creative Writing for Kids. Vocabulary Building Activities.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 23,
    appName: 'Digital Marketing',
    des: 'Digital Marketing Fundamentals. Social Media Marketing Strategy. SEO (Search Engine Optimization) Certification.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 24,
    appName: 'Graphic Design and Multimedia',
    des: 'Graphic Design and Visual Communication. Adobe Creative Suite Certification. 3D Animation and Modeling.',
    dur: '1 hour',
    category: 'SKILLS',
  },
  {
    appId: 25,
    appName: 'Art and Creativity',
    des: 'Drawing and Painting for Kids. Craft Making and DIY Projects. Introduction to Music and Musical Instruments.',
    dur: '1 hour',
    category: 'SKILLS',
  }, 
  {
    appId: 26,
    appName: 'Financial Literacy and Personal Finance',
    des: 'Learn the basics of budgeting, saving, investing, and managing personal finances effectively.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 27,
    appName: 'Introduction to Accounting',
    des: 'Understand the fundamental principles of accounting and financial statements.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 28,
    appName: 'Investment Fundamentals',
    des: 'Explore the world of stocks, bonds, and investment strategies.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 29,
    appName: 'Financial Modeling',
    des: 'Gain skills in building financial models to analyze businesses and investments.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 30,
    appName: 'Risk Management and Insurance',
    des: 'Explore the concepts of risk assessment and how insurance works.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 31,
    appName: 'Introduction to Banking',
    des: 'Get insights into the banking industry, its functions, and financial products.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 32,
    appName: 'Estate Planning and Wealth Management',
    des: 'Learn about managing wealth, estate planning, and inheritance.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 33,
    appName: 'Financial Technology (FinTech)',
    des: 'Understand how technology is reshaping the financial industry, including blockchain and cryptocurrency.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 34,
    appName: 'Financial Regulation and Compliance',
    des: 'Understand the legal and regulatory aspects of the finance industry.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 35,
    appName: 'Financial Reporting and Analysis',
    des: 'Dive into financial statement analysis and reporting for businesses.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 36,
    appName: 'Credit Management',
    des: 'Learn how to manage credit, understand credit reports, and improve credit scores.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 37,
    appName: 'Financial Planning for Millennials',
    des: 'Specifically tailored to the financial needs and goals of young adults.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 38,
    appName: 'Online Trading and Investment',
    des: 'Explore online brokerage platforms, stock trading, and investment strategies for beginners.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 39,
    appName: 'Budgeting and Money Management Apps',
    des: 'Discover how to use personal finance apps for budgeting, expense tracking, and financial planning.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 40,
    appName: 'Digital Payments and Cryptocurrencies',
    des: 'Learn about digital wallets, peer-to-peer payments, and cryptocurrencies like Bitcoin.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
  },
]

// Write your code here

class AppStore extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    seacrhInput: '',
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredApps = () => {
    const {activeTabId} = this.state
    const filteredApps = appsList.filter(
      eachApp => eachApp.category === activeTabId,
    )
    return filteredApps
  }

  searchApps = event => {
    this.setState({
      seacrhInput: event.target.value,
    })
  }

  render() {
    const {activeTabId, seacrhInput} = this.state

    const filteredApps = this.getFilteredApps()
    const newFilteredApps = filteredApps.filter(eachApp =>
      eachApp.appName.toLowerCase().includes(seacrhInput.toLowerCase()),
    )
    return (
      <>
      <Navbar11/>
      <div className="container">
        <h1 className="heading">Courses</h1>
        <ul className="tabs">
          {tabsList.map(tabs => (
            <TabItem
              key={tabs.tabId}
              tabId={tabs.tabId}
              displayText={tabs.displayText}
              isActive={tabs.tabId === activeTabId}
              clickTabItem={this.clickTabItem}
            />
          ))}
        </ul>
        <div>
        <Link className='hyper-link'  to="/signup">
          <ul className="apps">
            {newFilteredApps.map(eachItem => (
           
              <AppItem
                key={eachItem.appId}
                appName={eachItem.appName} 
                des={eachItem.des}
                dur={eachItem.dur}
                imageUrl={eachItem.imageUrl}
              />
            
            ))}
          </ul> 
          </Link>
        </div>
      </div> 
      </>
    )
  }
}

export default AppStore