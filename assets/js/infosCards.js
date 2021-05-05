const infosCards = [
  {
    number: "0",
    type: "Assessment",
    title: "Stakeholders' assessment",
    preamble:
      " Requirements elicitation is a complex process where software engineers work together with users in order to understand issues related to the application dominain, the services and features of the system that are desired by stakeholders, and necessary aspects such as performance, privacy, among others. In AI-based systems, it should be incorporated the perspectives of different stakeholders, especially those who may be impacted by the AI-based system developed, i.e., not only end-users are potential stakeholders, but also other people affected by the system in runtime, as members of the society.",
    whatToDo: [
      "Ask your team:",
      "Did you identify all stakeholders? Even the ones using, affected, or influecing the outcomes of the system in runtime?",
      "What is the relationship between the multiple stakeholders?",
      "How does the system impact on multiple stakeholders?",
      "Are the multiple stakeholders able to influence the system development process? How?",
      "Do you encourage or require that designers and users of AI-based systems consult relevant stakeholder groups while developing and managing the use of AI applications? Multistakeholder Collaboration.",
    ],
    praticalExample:
      "A company developing AI-based system should not ignore runtime stakeholders (as it is done in classical Requirements Engineering), that is, should not limit runtime stakeholders to just users of the system-to-be, but extend to other parties. For instance, runtime stakeholders of driverless cars go beyond passengers, but pedestrians, bystanders and others nearby drivers. This card is linked with card #9."
  },
  {
    number: "1",
    type: "Transparency",
    title: "Transparency, Explainability",
    preamble:
      "Transparency is a cornerstone for the realization of many other principles. When taking transparency into account, it is essential to understand what you are being transparent about, and to who you want to be transparent.",
    whatToDo: [
      "Ask your team:",
      "Did you understand and document how the system's internal funcionalities, i.e, internal transparency?",
      "Did you understand and document decision making process to elicit requirements, i.e., explain system development process?",
      "Did you understand and explain how the system works in runtime, i.e., external transparency?",
      "Did you explain system's external outputs?",
      "Did you explain your system's data?",
      "What do you have to explain to multiple stakeholders identified (in card #0)?",
      "Beyond multiple stakeholders indentified (in card #0), also contemplate lawyers and regulatory agencies.",
    ],
    praticalExample: 
      "A company developing AI-based system must be clear about why the system has been implemented in a given context, and for what tasks, besides enabling oversight of their operations.",
  },
  {
    number: "2",
    type: "Transparency",
    title: "Explainability, Explicability, Understandability",
    preamble:
      "An AI must be designed and executed so that it is possible for humans to get insight into business logic applied. If an AI system has a considerable impact on the life of a particular person and cannot provide complete and proper explanation for its decisions, then the system should not be deployed.",
    whatToDo: [
      "Ask your team:",
      "How is explainability achieved and maintened in your system?",
      "Did you understand the decisions your system takes?",
      "Can you explain them to developers and multiple stakeholders?",
      "Is the model used clearly expressed and understandable?",
      "Did you make trade-offs between explainability and privacy or accuracy? (see trade-offs section)",
      "Is the process of training and testing data well known and changable?",
      "Did you use third party componentes in your system? Are they well understood and documented?",
    ],
    praticalExample:
      "In a healthcare context, users would like to know why a decision was taken, what were the reasons behind the prescription of a medicine or the indication for surgery.",
  },
  {
    number: "3",
    type: "Transparency",
    title: "Communication",
    preamble:
      "AI systems should be designed and implemented to allow for oversight, including through translation of their operations into intelligible outputs and the provision of information about where, when, and how they are being used.",
    whatToDo: [
      "Ask your team:",
      "What is being communicated regarding the system to its multiple stakeholders? And to the wider public?",
      "What are the general objectives of your system?",
      "What are the main (specific) objectives of your system?",
      "Can you explain why your system is deployed in this area?",
      "Have your multiple stakeholders enough information to thoroughly understand how the system operates?",
      "Are your multiple stakeholders warned that they are interacting with an AI-based system?",
      "If there are human subjects, have they given informed consent, where subjects affirmatively opt-in and have a clear understanding of the data uses to which they consent?",
      "Is user feedback being collected?",
      "Can you explain how user feedback is being used to refine the system?",
    ],
    praticalExample:
      "A company developing an AI-based system for human resources, during the recruitment process, if it is dealing with a candidate's personal information, would need the candidate's approval for data processing, and should also clearly state what data is being collected and why.",
  },
  {
    number: "4",
    type: "Transparency",
    title: "Communication",
    preamble:
      "Conflicts between the practical implementation of two principles will eventually arise, and as we are confrontred with these real dilemmas, solutions will require making trade-offs between those two values (principles), by choosing the priority of one over another. Trade-offs and their rationale should be documented to provide greater transparency.",
    whatToDo: [
      "Ask your team:",
      "How are trade-offs judgements being made?",
      "Who are the decision-makers responsible for resolving the conflict between principles?",
      "What kind of trade-offs are emerging from the development of your system? Have you identified all possible trade-offs?",
      "Is the rationale of the prioritisation being documented?",
    ],
    praticalExample:
      "A company developing an AI-based system that is using personal data can improve the services offered to the public by adapting them based on personal or demographic characteristics, but compromise personal privacy due to high data demands.  Documenting trade-offs enhances relationship towards multiple stakeholders. Furthermore, a trade-off between accuracy and explainability may occur due to intrinsic features of deep learning.",
  },
  {
    number: "5",
    type: "Transparency",
    title: "Explicability",
    preamble:
      "A software requirement should be traceable backward to the system requirements that it helps stisfy, as well as to stakeholders that motivated it. In addition, data should be traceable back to where, how and when it was captured, retrieved, cleaned and analysed.",
    whatToDo: [
      "Ask your team:",
      "Did you document the code?",
      "Did you document the development process?",
      "Did you document the project?",
      "Did you document the decision making for eliciting ethical requirements and other functional and non-functional requirements your system should have?",
      "Can you provide traceability for the system's behaviour?",
      "Did you document the ML pipeline (data extraction, model training, model evaluation, model deployment)?",
      "Did you document your system's decision making and actions?",
      "Are the decisions made by your AI system capable of being replicated by external auditors?",
    ],
    praticalExample:
      "A company developing an AI-based system should avoid ML subsystems as a black-box element, because it may be violating the traceability property of the system requirements. In addition, it should be able to intelligibly explain the incoming data, the outgoing data, what its algorithms do, their purpose, and which stakeholder originated them. Traceability and explainability can guarantee safety.",
  },
  {
    number: "6",
    type: "Transparency",
    title: "Explainability, Explicability, Disclosure",
    preamble:
      "Having a good grasp of the rationale and criteria behind the decision-making and problem-solving behaviour of your system is essential for producing safe, fair, and ethical AI.",
    whatToDo: [
      "Ask your team:",
      "Are you retrieving little or no personal data, or anonymising, encrypting and securely processing them?",
      "Can you reproduce to external algorithmic auditing bodies decisions made by your AI?",
      "How do you allow for independent analysis and review of your system?",
      "Did you implement monitoring mechanisms to ensure your system is producing accurate results?",
      "How is testing of the system objectives being conducted?",
      "Are tests being made extensively? Are improbable situations being taken into account?",
      "Did you document these tests?",
      "Can you explain to external algorithmic auditing bodies the technical and ethical funcionalities of your AI?",
      "Can you assure system's reliability to multiple stakeholders? Can you reproduce failure scenarios, explain and repair them?",      
    ],
    praticalExample:
      "An AI-based system that assesses the potential risk of recidivism should have high reliability, while being able to explain its algorithm to society also at runtime, in addition to being able to be subject to an external audit, since its malfunctioning can cause great harm to society.",
  },
  {
    number: "7",
    type: "Transparency",
    title: "Interpretability, Showing",
    preamble:
      " People interacting with the system or using it shoud be able to undersand it sufficiently. Users should be able to make informed decisions based on its suggestions, or to challenge its suggestions. AI systems should let humans make independent choices.",
    whatToDo: [
      "Ask yourself:",
      "What data are used by the system?",
      "Does the system use or collect personal data? Why? How is the personal data used?",
      "Do you clearly inform your (end-)users about any personal data collection? E.g., asj for consent, provide an opportunity to revoke it etc.",
      "Have you taken measures to enhance (end-user) privacy, such as encryption or anonymization?",
      "Who makes the decisions regarding data use and collection? Do you have organizational policies for it?",
    ],
    praticalExample:
      "Rather than collection and selling data, appealling yo privacy can also be profitable. Regulations are making it increasingly difficult to collect lots of personal data for profit. Privacy can be an alternate selling point in today's climate.",
  },
  {
    number: "8",
    type: "Data",
    title: "Data Quality",
    preamble:
      "As AI are trained using data, the data used directly affects how the system operates. Both the nature and the quality and integrity of the data used has to align with goals of the system.",
    whatToDo: [
      "Ask yourself:",
      "What are good or poor quality data in the context of your system?",
      "How do you evaluate the quality and integrity of your own data? Are there alternative ways?",
      "If you utilize data from external sources, how do you control their quality?",
      "Did you align yout system with relevant standards (for example ISO, IEEE) or widely adopted protocols for daily data management and governance?",
      "How can you tell if your data sets have been hacked or otherwise compromised?",
    ],
    praticalExample:
      "In 2017, Amazon scrapped its recruitment AI because of bad data. They used past recruitment data to teach the AI. As they had mostly hired men, the AI began to consider women undesirable based on the data.",
  },
  {
    number: "9",
    type: "Data",
    title: "Access to Data",
    preamble:
      "Aside from carefully planning what data you colect and how it is also important to plan how it can or will be used and by whom.",
    whatToDo: [
      "Ask yourself:",
      "Who can access the users'data, and under what circumstances?",
      "How do you ensure that the people who access the data: 1) have a valid reason to do so. and 2) adhere to the regulations and policies related to data?",
      "Do you keep logs of who accesses the data and when? Do the logs also tell why?",
      "Do you use existing data governance frameworks or protocols? Does your organization have its own?",
      "Who handles the data collection, storage and use?",
    ],
    praticalExample:
      "Third parties you give access to the data can misuse it. A prominent example of this is the case of Cambridge Analytica and Facebook, in which data from FAcebook was used questionably. However, such incidents can also paint your organization in a bad way.",
  },
  {
    number: "10",
    type: "Agency & Oversight",
    title: "Human Agency",
    preamble:
      "People interacting with the system or using it shoud be able to undersand it sufficiently. Users should be able to make informed decisions based on its suggestions, or to challenge its suggestions. AI systems should let humans make independent choices.",
    whatToDo: [
      "Does the system interact with decisions by human actors, i.e. end users (e.g. recommending users actions or decisions, or presenting options)?",
      "Does the system communicate to its (end) users that a decision, content or outcome is the result of an algorithmic decision? Into how much detail does it go?",
      "In the system`s use context, what tasks are done by the system and what tasks are done by humans?",
      "Have you taken measures to prevent overconfidence or overreliance on the system?",
    ],
    praticalExample:
      "A medical system recommends diagnoses. How does the system communicate to doctors why it made a recommendation? How should the doctors know when to challenge the system? Does the system somehow change how patients and doctors interact?",
  },
  {
    number: "11",
    type: "Agency & Oversight",
    title: "Human Oversight",
    preamble:
      "AI systems shoud support human decision-making. They shoud not undermine human autonomy by making decisions for us, meaning they shoud be subject to human oversight.",
    whatToDo: [
      "Ask yourself:",
      "Who can control the system and how? In what situations?",
      "What would be the appropriate level of huan control for this particular system an its use cases?",
      "Related to the Safety and Security cards: how do you detect and respond if something goes wrong? Does the system then stop entirely, partially, or would control be delegated to a human? Why?",
    ],
    praticalExample:
      "Assuming control is especially related to cyber-physical systems such as drones or other vehicles. For purely digital systems, the focus should be on supporting human decision-making instead of directing it.",
  },
  {
    number: "12",
    type: "Safety & Security",
    title: "System Security",
    preamble:
      "While cybersecurity is important in any system, AI systems present new challenges. Cyber-physical systems can even cause fatalities in the hands of malicious actors.",
    whatToDo: [
      "Ask yourself:",
      "Did you assess potential forms of attacks to which the system could be vulnerable? Did you consider ones that are unique or more relevant to AI systems?",
      "Did you consider different types of vulnerabilities, such as data pollution and physical infrastructure?",
      "Have you verified how your systems behaves in unexpected situations and environments?",
      "Does your organization have cybersecurity personnel? Are they involved in this system?",
    ],
    praticalExample:
      "The autonomous nature of AI systems makes new vectos of attack possible. A white line drawn across a road can confuse a self-driving vehicle. What happened to Microsoft's Tay Twitter bot is another example of a new type of attack.",
  },
  {
    number: "13",
    type: "Safety & Security",
    title: "System Safety",
    preamble:
      "AI systems exert notable influence on the physical world whether they are cyber-physical or not. Various risks and their consequences should be considered, thinking ahead to the operational life of the system.",
    whatToDo: [
      "Ask yourself:",
      "What kind of risks does the system involve? What kind of damage could it cause?",
      "How do you measure and assess risks and safety?",
      "In what conditions do the fallback plans trigger? Are they automatic or do they require human input?",
      "Is there a plan to mitigate or manage technological errors, accidnts, or malicious misuse? What if the systems provides wrong results, becomes unavailable, or provides societally unacceptable results?",
      "What liability and consumer protection laws apply to your system? Have you taken them into account?",
    ],
    praticalExample:
      "AI systems can aid automating various organizational tasks, making it possible to reduce personnel. However, if a customer organization becomes reliant on your AI system to handle a portion of its operations, what happens if that AI stops functioning for even a few days? What could you do to alleviate the impact?",
  },
  {
    number: "14",
    type: "Fairness",
    title: "Accessbility",
    preamble:
      "Technology can be discriminatin in various ways. Given the enormous impact AI systems can have, ensuring equal access to their positive impacts is ethically important.",
    whatToDo: [
      "Ask yourself:",
      " Does the system consider a wide range of individual preferences and abilities? If not, why?",
      "Is the system usable by those with special needs or disabilities, those at risk of exclusion, or those using assistive technologies?",
      "Were people representing various groups somehow involved in the development of the system?",
      "How is the potential user audience taken into account?",
      "Is the team involved in building the sustem representative of your largel user audience? Is it representative of the general population?",
      "Did you assess whether there could be (groups of) people?",
    ],
    praticalExample:
      "AI tends to benefit those who are already technologically capable, resulting in increased inequality. E.g. most of the images used in machine learning have been labeled by young white men.",
  },
  {
    number: "15",
    type: "Fairness",
    title: "Stakeholder Participation",
    preamble:
      "As AI systems have notable impacts, they stakeholders are also numerous. Though the system affects these various holders in various ways, they are often not involved in the development. Yet, e.g. when using a decision-making system, its users have to trust the system while also being critical of it.",
    whatToDo: [
      "Turn to your stakeholder analysis (card #0):",
      "Which stakeholders are stakeholders in system development?",
      "How are the different stakeholders of the system involved in the development of the system? If they aren't, why?",
      "How do you inform your external and internal stakeholders of the system's development?",
    ],
    praticalExample:
      "Often the people an AI system is used on are individuals who are simply objects for the system. For example, a medical system is developed for hospitals, used by doctors, but ultimately used on patients. Why not talk to the patients too?",
  },
  {
    number: "16",
    type: "Wellbeing",
    title: "Environmental Impacts",
    preamble:
      "Past the general wellbeing implications, ecological consciousness is a current trend. Being ecological can be a selling point for your organization.",
    whatToDo: [
      "Ask yourself:",
      "Did you assess the environmental impact of the system's development, deployment, and use? E.g., the type of energy used by the data centers.",
      "Did you consider the environmental impact when selecting specific technical solutions?",
      "Did you ensure measures to reduce the environmental impact of your system's life cycle?",
    ],
    praticalExample:
      "If you are hosting on a third party cloud, try to ascertain the systainability of the service provider's services. If you are using hardware, are you processing the data in each physical device of your own or are you processing it in the cloud?",
  },
  {
    number: "17",
    type: "Wellbeing",
    title: "Societal Effects",
    preamble:
      "The impacts a system has go beyond its userbase. A system may well affect negatively even those who do net use it nor wish to use it.",
    whatToDo: [
      "Ask yourself:",
      "Did you assess the brader societal impact of the AI system's use beyond the individual (end-)users? Consider stakeholders who might be indirectly affected by the system. ",
      "How will the systems affect society when in use?",
      "What kind of systemic effects could the system have?",
    ],
    praticalExample:
      "Surveillance technology utilizing facial recognition AI has long=reaching impacts. People may wish to avoid areas that utilize such surveillance, negatively affecting businesses in said area. People may become stressed  at the mere thought of such surveillance. Some may even emigrate as a result.",
  },
  {
    number: "18",
    type: "Accountability",
    title: "Auditability",
    preamble:
      "Regulations affecting AI and data may necessitate audits of systems in the future. Similarly, if the system causes damage, an audit might be requested. It is good to have mechanisms in place beforehand.",
    whatToDo: [
      "Ask yourself:",
      "Is the system auditable?",
      "Can an audit be conducted independently?",
      "Is the system available for inspection?",
      "What mechanisms facilitate the system's auditability? How is traceability and logging of the systems's processess and outcomes ensured?",
    ],
    praticalExample:
      "In heavily regulated fields such as medicine, audits are typically required before a system can be utilized in the first place. ",
  },
  {
    number: "19",
    type: "Accountability",
    title: "Ability to Redress",
    preamble:
      "Making sure people know they can be compensated in some way in the event something goes wrong with the system is important in generating trust. Such scenarios should be planned in advance to what extent possible.",
    whatToDo: [
      "Ask yourself:",
      "What is your (developer organization) responsability if the system causes damage or otherwise has a negative impact?",
      "In the event of negative impact, can the ones affected seek responsability?",
      "How do you inform users and other third parties about opportunities for redress?",
    ],
    praticalExample:
      "AI systems can inconvenience users in unforeseen, unpredictable ways. Depending on the situation, the company may or may not be legally responsible for the inconvenience. Noetheless, by offering a digital platform for seeking refress, your company can seem more trustworthy while also offering additional value to your users.",
  },
  {
    number: "20",
    type: "Accountability",
    title: "Minimizing Negative Impacts",
    preamble:
      "Minimizing negative impacts of the system is financially important for any developer organization. Incidents are often costly.",
    whatToDo: [
      "First, consider:",
      "Is your stakeholder analysis is up-to-date {Card #0}",
      "Have you discussed risks? {Card #13}",
      "Have you discussed auditability? {Card #18}",
      "Have you discussed redress issues? {Card #19}",
      "Are the people involved with the development of the system also involved with the development of the system also involved with it during its operational life? If not, they may not feel as accountable.",
      "Are you aware of laws related to the system?",
      "Can users of the system somehow report volnerabilities, risks and other issues in the system?",
      "  With whom have you discused accountability and other ethical?",
    ],
    praticalExample: "",
  },
];
