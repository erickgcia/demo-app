import { userOne, userTwo, userThree } from '../assets/images'

export const pricingListing = {
  basic: {
    id: 'basic',
    title: 'Landing Page Design + Development',
    text: "Stunning single-page design that's sure to impress.",
    price: '999',
    spots: '4',
    bgColor: 'bg-custom-gray',
    list: ['Designs within 7 days', 'Code development', 'Unlimited revisions'],
  },
  popular: {
    id: 'popular',
    title: '5 Page Website Design + Development',
    text: 'Impress your audience with a engaging multipage website.',
    price: '2499',
    spots: '2',
    bgColor: 'h-bg',
    list: [
      'Designs within 14 days',
      'Code development',
      'Unlimited revisions',
      'Figma source file',
      'Pause anytime',
    ],
  },
  advance: {
    id: 'advance',
    title: '10 Page Website Design + Development',
    text: 'Maximize your online impact with a feature-rich website.',
    price: '3499',
    spots: '7',
    bgColor: 'bg-custom-gray',
    list: [
      'Designs within 18 days',
      'Code development',
      'Unlimited revisions',
      'Figma source file',
      'Multiple brands',
      'Pause anytime',
    ],
  },
}

export const testimonialsData = [
  {
    text: 'Absolutely great to work with and delivers professional and creative work quickly.',
    name: 'John Doe',
    position: 'President',
    image: userOne,
  },
  {
    text: 'The team is fantastic! They understood our vision and brought it to life beautifully.',
    name: 'Michael White',
    position: 'CEO',
    image: userTwo,
  },
  {
    text: 'The team is fantastic! They understood our vision and brought it to life beautifully.',
    name: 'Mike McConnell',
    position: 'CEO',
    image: userThree,
  },
]

export const frequentlyAskQuestions = [
  {
    id: 'faq-1',
    question: 'How does it work?',
    answer:
      "We'll work with you to understand your business and product. Submit your requests for design we'll get it designed. It's as simple as that.",
  },
  {
    id: 'faq-2',
    question: 'Is it really unlimited revisions?',
    answer:
      "Yes, it really is! Once you receive the initial design, you'll be able to add unlimited revisions requests to your queue, and they'll be completed one-by-one based on your priorities until you are 100% satisfied.",
  },
  {
    id: 'faq-3',
    question: 'What does "Pause anytime" means?',
    answer:
      'When you subscribe to 5 or 10 page website plan, you can get the a few pages designed and pause the plan. You can resume the service when you have more pages to be designed. Example: If you need 3 pages designed then you can subscribed to 5 page plan, get 3 pages designed. You can request the balance 2 pages anytime in future when the need arise.',
  },
  {
    id: 'faq-4',
    question: 'How will I receive my designs?',
    answer: 'The designs will be delivered as a figma file',
  },
  {
    id: 'faq-5',
    question: 'Do you work with contracts?',
    answer:
      "No contracts to sign, just choose a plan that's right for you. If you need an NDA, no problem at all, we can sign one.",
  },
  {
    id: 'faq-6',
    question: "What if I don't like the designs?",
    answer:
      "No problem at all! If something isn't perfect on the first round, you have unlimited feedback revisions. We'll continue take your feedback and revise the designs until you are 100% satisfied.",
  },
  {
    id: 'faq-7',
    question: 'Do you offer refunds?',
    answer:
      "Unfortunately, if design work has started we don't offer any form of money-back guarantee, but if you're unsatisfied with our service, please get in touch and we'll do our best to make things right.",
  },
]

export const navList = ['Benefits', 'Process', 'Work', 'Pricing', 'FAQs']
