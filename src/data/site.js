import {
  Award,
  Baby,
  CalendarCheck,
  ClipboardCheck,
  Eye,
  Focus,
  Glasses,
  HeartHandshake,
  Leaf,
  MapPin,
  MessageCircle,
  ScanEye,
  ShieldCheck,
  Smartphone,
  Sun,
} from 'lucide-react'

export const clinic = {
  name: 'Draford Eye Care Clinic',
  shortName: 'Draford',
  tagline: 'Clearer vision. Better eye care.',
  phone: '+234 912 821 2628',
  phoneHref: 'tel:+2349128212628',
  email: 'drafordeyecareclinic@gmail.com',
  emailHref: 'mailto:drafordeyecareclinic@gmail.com',
  address: 'Suite A1, Iyemi Plaza, Gudu, Abuja, Nigeria',
  addressLines: ['Suite A1, Iyemi Plaza', 'Gudu, Abuja, Nigeria'],
  mapsUrl:
    'https://maps.google.com/?q=Suite%20A1%2C%20Iyemi%20Plaza%2C%20Gudu%2C%20Abuja',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Suite%20A1%2C%20Iyemi%20Plaza%2C%20Gudu%2C%20Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed',
  facebook: 'https://www.facebook.com/drafordeyecareclinic/',
  hoursNote:
    "Opening hours can vary. Please call ahead to confirm today's times and availability.",
}

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
]

export const services = [
  {
    id: 'eye-exams',
    number: '01',
    icon: ScanEye,
    title: 'Comprehensive Eye Exams',
    shortTitle: 'Eye exams',
    summary:
      'A careful, unhurried look at how you see and how healthy your eyes are.',
    description:
      'We look beyond your prescription. A comprehensive exam reviews your history, tests your vision and assesses your eye health so we can give you a complete picture, not just a number.',
    features: [
      'Vision and visual acuity testing',
      'Refraction and prescription updates',
      'Eye health and pressure checks',
      'Clear explanation of every finding',
    ],
  },
  {
    id: 'eyewear',
    number: '02',
    icon: Glasses,
    title: 'Prescription Glasses & Frames',
    shortTitle: 'Eyewear',
    summary:
      'Frames and lenses chosen around your face, your comfort and the way you live.',
    description:
      'Choosing eyewear should feel straightforward and personal. We help you compare frame styles and lens options, then fine-tune the fit so your glasses feel as good as they look.',
    features: [
      'Frame styling and fit guidance',
      'Single-vision, bifocal and progressive lenses',
      'Lens coatings and treatments',
      'Adjustments and aftercare',
    ],
  },
  {
    id: 'contact-lenses',
    number: '03',
    icon: Focus,
    title: 'Contact Lens Services',
    shortTitle: 'Contact lenses',
    summary:
      'Professional fitting, practical training and follow-up care for comfortable lens wear.',
    description:
      'A good contact lens experience starts with the right fit. We assess your eyes, guide you through handling and care, and follow up to make sure your lenses stay comfortable and safe.',
    features: [
      'Contact lens fitting and trial',
      'Wear and care education',
      'Follow-up appointments',
      'Guidance on lens types and replacement',
    ],
  },
  {
    id: 'screening',
    number: '04',
    icon: ShieldCheck,
    title: 'Eye Health Screening',
    shortTitle: 'Eye screening',
    summary:
      'Early detection and practical guidance for protecting your long-term eye health.',
    description:
      'Some eye conditions develop quietly. Screening helps us spot changes early, review your risk factors and give you a clear plan for what to do next.',
    features: [
      'Ocular health evaluation',
      'Risk factor review',
      'Personalised eye health advice',
      'Referral support when needed',
    ],
  },
]

export const pillars = [
  {
    icon: Eye,
    title: 'Comprehensive care',
    text: 'Exams, eyewear and lenses in one calm clinic.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal guidance',
    text: 'Clear answers and recommendations built around you.',
  },
  {
    icon: ScanEye,
    title: 'Modern diagnostics',
    text: 'Careful assessments with contemporary equipment.',
  },
  {
    icon: MapPin,
    title: 'Rooted in Abuja',
    text: 'Proudly serving families in Gudu and beyond.',
  },
]

export const differentiators = [
  {
    icon: ScanEye,
    title: 'Modern diagnostic equipment',
    text: 'Thorough, comfortable assessments with up-to-date tools.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalised care',
    text: 'Recommendations shaped around your eyes, health and lifestyle.',
  },
  {
    icon: MessageCircle,
    title: 'Honest guidance',
    text: 'Plain-language explanations and no pressure to decide on the spot.',
  },
  {
    icon: Sun,
    title: 'A calmer clinic experience',
    text: 'Unhurried appointments in a welcoming, considered space.',
  },
]

export const values = [
  {
    icon: HeartHandshake,
    title: 'Compassionate care',
    text: 'We listen before we examine. Appointments are unhurried, and questions are always welcome.',
  },
  {
    icon: Award,
    title: 'Professional excellence',
    text: 'We hold ourselves to careful, current standards and explain the thinking behind every recommendation.',
  },
  {
    icon: MessageCircle,
    title: 'Patient education',
    text: 'No jargon and no pressure. You leave understanding your eyes and the options in front of you.',
  },
]

export const processSteps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book your visit',
    text: "Call us or send a request online. We'll confirm a time that works for you.",
  },
  {
    number: '02',
    icon: ScanEye,
    title: 'Comprehensive assessment',
    text: 'We review your history, test your vision and take a close look at your eye health.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Your care plan',
    text: 'We explain what we found, answer your questions and map out the next steps together.',
  },
]

export const faqs = [
  {
    question: 'Do I need a referral to book an appointment?',
    answer:
      'No referral is needed for a routine eye examination. If another clinician has referred you, bring your referral letter and any previous results so we can review them alongside our own assessment.',
  },
  {
    question: 'What should I bring to my appointment?',
    answer:
      'Bring your current glasses or contact lenses, your lens case and solution if you wear contacts, a list of medications you take, and any previous eye records. This helps us build a fuller picture of your eye health.',
  },
  {
    question: 'How long does an eye examination take?',
    answer:
      'A comprehensive examination usually takes around 30 to 45 minutes, though this can vary depending on your needs. We recommend allowing a little extra time for a first visit.',
  },
  {
    question: 'How often should I have my eyes checked?',
    answer:
      'Many adults benefit from an examination every one to two years. Your optometrist may suggest more frequent visits if you have a family history of eye disease, a health condition that affects the eyes, or notice changes in your vision.',
  },
  {
    question: 'Do you see children?',
    answer:
      'We welcome patients of all ages. Call ahead so we can advise on the best appointment time and what to expect for your child.',
  },
  {
    question: 'What happens after my examination?',
    answer:
      "We'll explain our findings in plain language, discuss your options and provide a prescription or care plan where needed. If a specialist referral is appropriate, we'll guide you through the next step.",
  },
  {
    question: 'What if I have an eye emergency?',
    answer:
      'If you have sudden vision loss, severe eye pain or an eye injury, seek urgent medical attention immediately. During opening hours, you can call the clinic for guidance on what to do next.',
  },
]

export const articleCategories = [
  'All guides',
  'Eye health',
  'Digital health',
  'Children',
  'Eyewear',
  'Contact lenses',
]

export const articles = [
  {
    id: 'regular-eye-exams',
    category: 'Eye health',
    icon: Eye,
    title: 'Why regular eye exams matter — even when you see clearly',
    excerpt:
      'Many eye conditions develop quietly. A routine exam can catch changes long before they affect your daily life.',
    readTime: '4 min read',
    body: [
      'Good vision on a chart does not always mean your eyes are healthy. Conditions such as glaucoma, diabetic eye disease and macular changes can begin without obvious symptoms, which is why regular examinations matter even when nothing feels wrong.',
      'An eye exam looks at more than your prescription. It assesses how your eyes work together, checks the health of the front and back of the eye, and can sometimes surface signs of wider health issues such as high blood pressure or diabetes.',
      'How often you need a check depends on your age, health history and family history. Many adults benefit from an exam every one to two years. If you have a condition that affects the eyes, or a close relative with eye disease, your optometrist may recommend more frequent visits.',
    ],
    tips: [
      'Bring your current glasses or contact lenses',
      'Note any changes you have noticed, however small',
      'Share your family history of eye disease',
    ],
  },
  {
    id: 'digital-eye-strain',
    category: 'Digital health',
    icon: Smartphone,
    title: 'Digital eye strain: small habits, real relief',
    excerpt:
      'Screens are part of daily life. A few simple adjustments can make long hours at a screen easier on your eyes.',
    readTime: '3 min read',
    body: [
      'Digital eye strain describes the tired, dry or achy feeling that can follow long stretches of screen use. It is common and usually temporary, but it is a signal that your eyes would benefit from a break.',
      'Try the 20-20-20 rule: every 20 minutes, look at something around 20 feet away for about 20 seconds. Position your screen slightly below eye level, keep it at arm’s length where possible, and reduce glare from windows or overhead lights.',
      'If your eyes still feel strained, your prescription may need checking, or dry eyes may be playing a part. An eye exam can help identify the cause and the right next step.',
    ],
    tips: [
      'Take regular screen breaks',
      'Blink consciously during focused work',
      'Check your prescription if strain persists',
    ],
  },
  {
    id: 'childrens-vision',
    category: 'Children',
    icon: Baby,
    title: "Your child's vision: signs worth noticing",
    excerpt:
      "Children rarely say \"I can't see well\". Watch for the everyday signs that their eyes may need attention.",
    readTime: '4 min read',
    body: [
      'Vision supports learning, play and confidence. Because children often adapt to blurry vision without complaining, changes can go unnoticed at home and in the classroom.',
      'Signs worth watching include squinting, sitting very close to screens or books, holding reading material unusually close, tilting the head, rubbing the eyes often, or losing interest in activities that need clear distance vision. Frequent headaches after school can also be worth checking.',
      'If something feels off, a professional eye examination can give you clarity. Early detection supports learning and helps address issues while they are easier to manage.',
    ],
    tips: [
      'Watch for squinting or head tilting',
      'Ask how clearly they see the board',
      'Book a check if you have concerns',
    ],
  },
  {
    id: 'choosing-frames',
    category: 'Eyewear',
    icon: Glasses,
    title: 'Choosing frames that fit your face — and your life',
    excerpt:
      'The right pair balances comfort, fit and personal style. Here is how to choose well without the pressure.',
    readTime: '3 min read',
    body: [
      'Frames are both a practical tool and a personal statement. The best pair does three things well: it fits comfortably, suits your prescription and fits the way you live — whether that is long hours at a screen, outdoor work or keeping up with children.',
      'Pay attention to width and bridge fit first. Frames should sit comfortably without pinching or sliding, and your eyes should sit reasonably close to the centre of the lenses. Weight and material matter too, especially if you wear glasses all day.',
      'Our team can help you compare options and understand lens choices, from coatings to progressive lenses, so you can make a decision you feel good about.',
    ],
    tips: [
      'Prioritise comfort and fit',
      'Consider your daily routine',
      'Ask how lens options differ',
    ],
  },
  {
    id: 'contact-lens-care',
    category: 'Contact lenses',
    icon: Focus,
    title: 'Contact lens care that protects your eyes',
    excerpt:
      'Comfortable contact lens wear starts with a proper fit and a routine you can actually keep up with.',
    readTime: '3 min read',
    body: [
      'A well-fitted contact lens should feel comfortable and support clear vision. If a lens feels dry, scratchy or unstable, the fit or lens type may need reviewing rather than simply tolerating it.',
      'Always wash and dry your hands before handling lenses, use the recommended solution, and follow your replacement schedule. Never use tap water or saliva on your lenses, and avoid sleeping in them unless your optometrist has specifically advised it.',
      'Keep your lens case clean and replace it regularly. If you notice redness, pain or sudden blurring, remove the lens and seek professional advice promptly.',
    ],
    tips: [
      'Never use tap water on lenses',
      'Follow your replacement schedule',
      'Remove lenses if your eye becomes red or painful',
    ],
  },
  {
    id: 'nutrition-and-eyes',
    category: 'Eye health',
    icon: Leaf,
    title: 'Nutrition and your eyes: what actually helps',
    excerpt:
      'There is no single "eye food", but a balanced diet supports the health of your eyes over time.',
    readTime: '3 min read',
    body: [
      'Nutrition is one part of a bigger picture that includes regular exams, UV protection and managing conditions like diabetes and high blood pressure. No single food protects vision on its own, but overall diet quality matters.',
      'Colourful vegetables and leafy greens, eggs, nuts and oily fish provide nutrients associated with eye health. Staying hydrated also helps keep eyes comfortable, particularly in air-conditioned spaces or long screen sessions.',
      'Supplements are not a substitute for a varied diet unless a clinician recommends them for a specific reason. If you are considering one, ask during your next visit.',
    ],
    tips: [
      'Build meals around colour and variety',
      'Stay hydrated through the day',
      'Ask before starting supplements',
    ],
  },
]

export const eyeCareTips = [
  {
    title: 'Follow the 20-20-20 rule',
    text: 'Every 20 minutes, look at something 20 feet away for about 20 seconds.',
  },
  {
    title: 'Protect your eyes from the sun',
    text: 'Choose sunglasses that block 99–100% of UVA and UVB rays.',
  },
  {
    title: 'Eat for your eyes',
    text: 'Leafy greens, colourful vegetables, eggs and oily fish support long-term eye health.',
  },
  {
    title: 'Keep lenses clean',
    text: 'Follow your replacement schedule and never use tap water on contact lenses.',
  },
  {
    title: 'Avoid rubbing your eyes',
    text: 'If your eyes itch, try a clean cool compress and seek advice if it persists.',
  },
  {
    title: 'Book regular checks',
    text: 'Even with clear vision, regular exams can catch changes early.',
  },
]
