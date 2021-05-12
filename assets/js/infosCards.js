const infosCards = [
  {
    number: "0",
    type: "Assessment",
    title: "Stakeholders' assessment",
    preamble:
      " Requirements elicitation is a complex process where software engineers work together with users in order to understand issues related to the application dominain, the services and features of the system that are desired by stakeholders, and necessary aspects such as performance, privacy, among others. In AI-based systems, it should be incorporated the perspectives of different stakeholders, especially those who may be impacted by the AI-based system developed, i.e., not only end-users are potential stakeholders, but also other people affected by the system in runtime, as members of the society.",
    issues: [
      "Ask your team:",
      "Did you identify all stakeholders? Even the ones using, affected, or influecing the outcomes of the system in runtime?",
      "What is the relationship between the multiple stakeholders?",
      "How does the system impact on multiple stakeholders?",
      "Are the multiple stakeholders able to influence the system development process? How?",
      "Do you encourage or require that designers and users of AI-based systems consult relevant stakeholder groups while developing and managing the use of AI applications? Multistakeholder Collaboration.",
    ],
    practicalExample:
      "A company developing AI-based system should not ignore runtime stakeholders (as it is done in classical Requirements Engineering), that is, should not limit runtime stakeholders to just users of the system-to-be, but extend to other parties. For instance, runtime stakeholders of driverless cars go beyond passengers, but pedestrians, bystanders and others nearby drivers. This card is linked with card #9.",
  },
  {
    number: "1",
    type: "Transparency",
    title: "Transparency, Explainability",
    preamble:
      "Transparency is a cornerstone for the realization of many other principles. When taking transparency into account, it is essential to understand what you are being transparent about, and to who you want to be transparent.",
    issues: [
      "Ask your team:",
      "Did you understand and document how the system's internal funcionalities, i.e, internal transparency?",
      "Did you understand and document decision making process to elicit requirements, i.e., explain system development process?",
      "Did you understand and explain how the system works in runtime, i.e., external transparency?",
      "Did you explain system's external outputs?",
      "Did you explain your system's data?",
      "What do you have to explain to multiple stakeholders identified (in card #0)?",
      "Beyond multiple stakeholders indentified (in card #0), also contemplate lawyers and regulatory agencies.",
    ],
    practicalExample:
      "A company developing AI-based system must be clear about why the system has been implemented in a given context, and for what tasks, besides enabling oversight of their operations.",
    tools: [
      {
        name: "DALEX",
        link: "https://github.com/ModelOriented/DALEX",
      },
      {
        name: "InterpretML",
        link: "https://github.com/interpretml/interpret",
      },
      {
        name: "CALIMOCHO",
        link: "https://github.com/stefanoteso/calimocho",
      },
      {
        name: "ABOD3",
        link: "https://github.com/RecklessCoding/ABOD3",
      },
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
      {
        name: "Multi Accuracy Boost",
        link: "https://github.com/amiratag/MultiAccuracyBoost",
      },
    ],
  },
  {
    number: "2",
    type: "Transparency",
    title: "Explainability, Explicability, Understandability",
    preamble:
      "An AI must be designed and executed so that it is possible for humans to get insight into business logic applied. If an AI system has a considerable impact on the life of a particular person and cannot provide complete and proper explanation for its decisions, then the system should not be deployed.",
    issues: [
      "Ask your team:",
      "How is explainability achieved and maintened in your system?",
      "Did you understand the decisions your system takes?",
      "Can you explain them to developers and multiple stakeholders?",
      "Is the model used clearly expressed and understandable?",
      "Did you make trade-offs between explainability and privacy or accuracy? (see trade-offs section)",
      "Is the process of training and testing data well known and changable?",
      "Did you use third party componentes in your system? Are they well understood and documented?",
    ],
    practicalExample:
      "In a healthcare context, users would like to know why a decision was taken, what were the reasons behind the prescription of a medicine or the indication for surgery.",
    tools: [
      {
        name: "DALEX",
        link: "https://github.com/ModelOriented/DALEX",
      },
      {
        name: "InterpretML",
        link: "https://github.com/interpretml/interpret",
      },
      {
        name: "CALIMOCHO",
        link: "https://github.com/stefanoteso/calimocho",
      },
      {
        name: "ABOD3",
        link: "https://github.com/RecklessCoding/ABOD3",
      },
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
      {
        name: "Multi Accuracy Boost",
        link: "https://github.com/amiratag/MultiAccuracyBoost",
      },
    ],
  },
  {
    number: "3",
    type: "Transparency",
    title: "Communication",
    preamble:
      "AI systems should be designed and implemented to allow for oversight, including through translation of their operations into intelligible outputs and the provision of information about where, when, and how they are being used.",
    issues: [
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
    practicalExample:
      "A company developing an AI-based system for human resources, during the recruitment process, if it is dealing with a candidate's personal information, would need the candidate's approval for data processing, and should also clearly state what data is being collected and why.",
  },
  {
    number: "4",
    type: "Transparency",
    title: "Communication",
    preamble:
      "Conflicts between the practical implementation of two principles will eventually arise, and as we are confrontred with these real dilemmas, solutions will require making trade-offs between those two values (principles), by choosing the priority of one over another. Trade-offs and their rationale should be documented to provide greater transparency.",
    issues: [
      "Ask your team:",
      "How are trade-offs judgements being made?",
      "Who are the decision-makers responsible for resolving the conflict between principles?",
      "What kind of trade-offs are emerging from the development of your system? Have you identified all possible trade-offs?",
      "Is the rationale of the prioritisation being documented?",
    ],
    practicalExample:
      "A company developing an AI-based system that is using personal data can improve the services offered to the public by adapting them based on personal or demographic characteristics, but compromise personal privacy due to high data demands.  Documenting trade-offs enhances relationship towards multiple stakeholders. Furthermore, a trade-off between accuracy and explainability may occur due to intrinsic features of deep learning.",
  },
  {
    number: "5",
    type: "Transparency",
    title: "Explicability",
    preamble:
      "A software requirement should be traceable backward to the system requirements that it helps stisfy, as well as to stakeholders that motivated it. In addition, data should be traceable back to where, how and when it was captured, retrieved, cleaned and analysed.",
    issues: [
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
    practicalExample:
      "A company developing an AI-based system should avoid ML subsystems as a black-box element, because it may be violating the traceability property of the system requirements. In addition, it should be able to intelligibly explain the incoming data, the outgoing data, what its algorithms do, their purpose, and which stakeholder originated them. Traceability and explainability can guarantee safety.",
    tools: [
      {
        name: "DALEX",
        link: "https://github.com/ModelOriented/DALEX",
      },
      {
        name: "InterpretML",
        link: "https://github.com/interpretml/interpret",
      },
      {
        name: "CALIMOCHO",
        link: "https://github.com/stefanoteso/calimocho",
      },
      {
        name: "ABOD3",
        link: "https://github.com/RecklessCoding/ABOD3",
      },
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
      {
        name: "Multi Accuracy Boost",
        link: "https://github.com/amiratag/MultiAccuracyBoost",
      },
    ],
  },
  {
    number: "6",
    type: "Transparency",
    title: "Explainability, Explicability, Disclosure",
    preamble:
      "Having a good grasp of the rationale and criteria behind the decision-making and problem-solving behaviour of your system is essential for producing safe, fair, and ethical AI.",
    issues: [
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
    practicalExample:
      "An AI-based system that assesses the potential risk of recidivism should have high reliability, while being able to explain its algorithm to society also at runtime, in addition to being able to be subject to an external audit, since its malfunctioning can cause great harm to society.",
    tools: [
      {
        name: "DALEX",
        link: "https://github.com/ModelOriented/DALEX",
      },
      {
        name: "InterpretML",
        link: "https://github.com/interpretml/interpret",
      },
      {
        name: "CALIMOCHO",
        link: "https://github.com/stefanoteso/calimocho",
      },
      {
        name: "ABOD3",
        link: "https://github.com/RecklessCoding/ABOD3",
      },
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
      {
        name: "Multi Accuracy Boost",
        link: "https://github.com/amiratag/MultiAccuracyBoost",
      },
    ],
  },
  {
    number: "7",
    type: "Transparency",
    title: "Interpretability, Showing",
    preamble:
      " People interacting with the system or using it shoud be able to undersand it sufficiently. Users should be able to make informed decisions based on its suggestions, or to challenge its suggestions. AI systems should let humans make independent choices.",
    issues: [
      "Ask your team:",
      "Does your system makes use of black-box algorithms?",
      "Did you reconsider using black-box thoroughly?",
      "Is data quality transparent and available for periodic assessment?",
      "Can you demonstrate what measures are being taken to ensure compliance to current legislations, such as GDPR?",
      "Is it clear for the end user that they are interacting with an AI system, rather than a human?",
    ],
    practicalExample:
      "A black-box element does not disclose anything about internal design. A company developing AI-based system should take into account using XAI tools - Explainable Artificial Intelligence - that produce more explainable models while maintaining high performance levels, or reconsider using black-box elements altogether.",
    tools: [
      {
        name: "DALEX",
        link: "https://github.com/ModelOriented/DALEX",
      },
      {
        name: "InterpretML",
        link: "https://github.com/interpretml/interpret",
      },
      {
        name: "CALIMOCHO",
        link: "https://github.com/stefanoteso/calimocho",
      },
      {
        name: "ABOD3",
        link: "https://github.com/RecklessCoding/ABOD3",
      },
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
      {
        name: "Multi Accuracy Boost",
        link: "https://github.com/amiratag/MultiAccuracyBoost",
      },
    ],
  },
  {
    number: "8",
    type: "Justice and fairness",
    title: "Inclusion, Equality, Equity, Non-bias, Fairness, Consistency",
    preamble:
      "Disruptive technology can also lead to discrimination in a number of ways. It is essential to provide equal access to the benefits of AI as they play a huge role in today's society.",
    issues: [
      "Ask your team:",
      "Did you consider usability by people with special needs, disabilities, or marginalised groups?",
      "Did you assess and mitigated possible biases in the data set?",
      "Did you create a discrimination impact assessments to identify issues before your AI is in use?",
      "Did you align your system with relevant standards (for example ISO, IEEE) or widely adopted protocols for daily data management and governance?",
      "Have you assessed whether there are any groups of people disproportionately affected by the negative impacts of the system at runtime?",
    ],
    practicalExample:
      "On any given issue, citizens will rarely all share the same values and perspectives. However, there is evidence that when groups are able to reflect on and articulate what they care about, it is possible to reduce conflict and reach compromise. AI tends to benefit those who are already technologically capable, resulting in increased inequality. The deployment of biased systems leads to the exacerbation of existing social injustices (e.g. systems advising on which prisoners get parole that use racially biased historical data and result in people of colour staying in prison longer).",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
      {
        name: "Multi Accuracy Boost",
        link: "https://github.com/amiratag/MultiAccuracyBoost",
      },
      {
        name: "VFAE",
        link: "https://github.com/yevgeni-integrate-ai/VFAE",
      },
      {
        name: "The Impartial Machines Project",
        link: "https://github.com/abhayrjoshi/The-Impartial-Machines-Project",
      },
      {
        name: "Fairness-Aware-Ranking",
        link: "https://github.com/saikumarkorada20/Fairness-Aware-Ranking",
      },
      {
        name: "Fair-ML-4-Ethical-AI",
        link: "https://github.com/wikistat/Fair-ML-4-Ethical-AI",
      },
      {
        name: "Fair-Forest",
        link: "https://github.com/pjlake98/Fair-Forest",
      },
    ],
  },
  {
    number: "9",
    type: "Justice and fairness",
    title: "Inclusion, Diversity, Plurality, Accessibility",
    preamble:
      "While AI systems have great impact on different peoples lives, the several stakeholders are usually not involved in the development of the systems. To promote diversity, plurality and inclusion when developing and using a decision-making system, its users have to trust the system while also being part of its development. In order to create ethical and rights-respecting AI, a more diverse participation in the development process for AI systems is required.",
    issues: [
      "Ask your team:",
      "Have you already verified your stakeholder assessment card?",
      "What stakeholders are involved in the development of the system?",
      "Do you include people of diverse backgrounds into the development and design of AI? (E.g., women, people with disabilities, minority groups, different cultures, ages and professional backgrounds and skill sets) Inclusiveness in design.",
      "Do you conduct regular diversity sessions and incorporate the viewpoints from a wide range of stakeholders?",
      "How are the multiple stakeholders of the system being involved in the system development?",
      "How are the multiple stakeholders informed about the development of the system?",
      "Are individuals provided with access to data that is being stored about them when requested, if so, can they be rectified or deleted?",
    ],
    practicalExample:
      "A company developing AI-based system should incorporate different views from multiple stakeholders, by either identifying the impacted stakeholders during the runtime of the system and including different people with different skills and backgrounds into the system development process, while keeping them informed about the ethical decision making process.",
  },
  {
    number: "10",
    type: "Justice and fairness",
    title: "Reversibility, Remedy, Redress",
    preamble:
      "Undesirable and harmful situations are likely realities that should be taken into account when developing AI systems, meaning that they should be subject to reversibility, remedy and redress when facing these undesirable outcomes.",
    issues: [
      "Ask your team:",
      "What mechanisms can ensure that the autonomy of AI is restricted and the outcomes are reversible when there is a harm caused?",
      "How can the system undo certain actions?",
      "Are there preemptive steps in place to trace and deal with possible harmful situations?",
      "Have you implemented and tested  fallback mechanisms in your system?",
      "Are there merchanisms to redress in a timely and appropriate manner harmful sitations?",
      "Are there detection mechanisms if something unexpected occurs? How does the system behave in this case, full stop, partial stop, or handle control to a human?",
    ],
    practicalExample:
      "AI should be programmed with a condition of reversibility, which ensures controllability and safety of the system: The ability to undo the last action or a sequence of actions allows users to undo undesired actions and get back to the ‘good’ stage of their work.",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "11",
    type: "Non-maleficence",
    title: "Non-maleficence, Security, Safety",
    preamble:
      "AI-based systems present new security challenges and they suffer from a number of novel unresolved vulnerabilities. A secure system is capable of maintaining the integrity of the information that is operating, remaining continuously functional and accessible to its authorised users and keeps confidential and private information secure even when confronted with malicious conditions.",
    issues: [
      "Ask your team:",
      "Does your organisation have a cybersecurity team? Are they involved in the development process of this system?",
      "Is security built into the architecture of the AI and tested before implementation?",
      "Have you assessed different vulnerability issues and attacks concerning your AI system? Such as data poisoning attacks, adversarial examples and exploitation of flaws in the design of autonomous system's goals.",
      "Is the system evaluated for unexpected situations and behaviour?",
      "Are public safety risks that might arise from AI use assessed?",
    ],
    practicalExample:
      "AI-based systems, like any system, are vulnerable to attacks by malicious agents, and can also be used maliciously in various scenarios, such as automating social engineering attacks, state use of automated surveillance platforms to suppress dissent, fake news reports with realistically fabricated video and audio, automated influence campaigns, among many others. It is paramount to ensure security mechanisms so that your AI is not repurposed by attackers to cause harm to society.",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "12",
    type: "Non-maleficence",
    title: "Harm, Protection, Precaution, Prevention, Integrity, Non-suversion",
    preamble:
      "AI systems should do no harm or avoid doing harm to others, insofar they yield large influence on people's lives, both physically and digitally. Distinct harms and their consequences should be considered, well documented, assessed, and their impact measured, in order to foster robustness and reliability.",
    issues: [
      "Ask your team:",
      "What are the possible types of harm involved in using the system? To whom is this harm caused? Are they well documented?",
      "What kind of damage could it cause?",
      "How do you measure and assess potential harms to user safety?",
      "Are the objectives, expected impact and security precautions assessed and documented in the development stage?",
      "Did you implement mechanisms and safeguards to protect user safety, also ensuring that the system is safe and secure throughout its life cycle?",
      "In facing potential harm, does the system allow for human interruption, or shutdown?",
      "Did you implement mechanisms to mitigate and manage possible errors, accidents, or malicious misuse?",
      "Do you have a plan when system provides wrong results, becomes unavailable, or provides socially unacceptable outcomes?",
      "Did you take into account liability and consumer protection laws that apply to your system?",
      "How can the system be used to respect and improve the lives of citizens?",
    ],
    practicalExample:
      'The European Council stated that "Member states should provide individuals with the right not to be subject to a decision significantly affecting them that is based on automated decision-making without meaningful human intervention. At the very least, an individual should be able to obtain human intervention in such automated decision-making and have their views taken into consideration before such a decision is implemented".',
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "13",
    type: "Responsibility",
    title: "Responsibility, Liability",
    preamble:
      "Developers are primarily responsible for the design and functionality of the AI, and when there is an error or harm, then the onus of responsibility often lies with them. Also, it is important to ensure that people affected can be compensated, in some way, when facing undesirable situations, in advance.",
    issues: [
      "Ask your team:",
      "Are there clear and concise allocation of responsibilities within the organisation?",
      "What is your (developer organization) responsibility if the system causes damage or otherwise has a negative impact?",
      "In the event of negative impact, can the ones affected seek redress?",
      "How do you inform users and other third parties about opportunities for redress?",
    ],
    practicalExample:
      "AI systems can inconvenience users in unforeseen, unpredictable ways. Depending on the situation, the company may or may not be legally responsible for the inconvenience. Nonetheless, by offering a digital platform for seeking redress, your company can seem more trustworthy while also offering additional value to your users.",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "14",
    type: "Responsibility",
    title: "Accountability",
    preamble:
      "Regulations may require to audit AI based systems in the course of time, consequently, it is advisable to have mechanisms for such task in advance.",
    issues: [
      "Ask your team:",
      "What are the issues involved with using poor data? What are the consequences?",
      "Is the system auditable?",
      "Can an audit be conducted independently?",
      "Is the system available for inspection?",
      "What mechanisms facilitate the system's auditability? How is traceability and logging of the systems's processess and outcomes ensured?",
      "How is adequate record-keeping, system for registration and documentation achieved?",
    ],
    practicalExample:
      "In facing negative outcomes from using AI, an accountability gap may impair the autonomy and violate the rights of the affected individuals. Accountability also requires that your project is auditable, that is, the project team keep records and make accessible information that enables monitoring of data provenance and analysis from the stages of collection, pre-processing, and modelling to training, testing, and deploying.",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "15",
    type: "Responsibility",
    title: "Acting with integrity",
    preamble:
      "AI organisations must ensure that their data meets quality and integrity standards at every stage of use, aligned with the objectives of the system, as the data used influences directly the operation of the system. Your project team should focus on the best practices of responsible data management, so that they are able to tend to data quality as an end-to-end priority.",
    issues: [
      "Ask your team:",
      "What are good or poor-quality data in the context of your system?",
      "How do you evaluate the quality and integrity of your own data? Are there alternative ways?",
      "How can you monitor data quality throughout the data lifecycle, before and after system's deployment?",
      "If you utilize data from external sources, how do you control their quality?",
      "Did you align your system with relevant standards (for example ISO, IEEE) or widely adopted protocols for daily data management and governance?",
      "How can you tell if your data sets have been hacked or otherwise compromised? Eg., data pollution, misdirected reinforcement learning behaviour",
      "Who handles data collection, storage, and use?",
      "Can your team report relevant issues (errors, security breaches, data leaks)? To whom?",
      "Is ethics training implemented in my organisation?",
    ],
    practicalExample:
      "In 2016, a beauty contest was judged by an AI, it selected nearly all white winners, with a lack of diversity. As they had used low quality data (lack of diversity) for data training, it favoured white participants.",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "16",
    type: "Privacy",
    title: "Privacy, Personal or private information",
    preamble:
      "Privacy is gaining much attention due to recent scandals involving users private information. Because of the large abundance of data that is required for AI to work, it is important that individuals’ privacy is not jeopardised as a result. Privacy violations can harm a person’s basic right to pursue their goals and life plans free from unchosen influence.",
    issues: [
      "Ask your team:",
      "What data are used by the system?",
      "Does the system use or collect personal data? Why? How is the personal data used?",
      "Are your users clearly informed about any personal data collection? Is it possible for them to consent, or to revoke access to their personal or private information?",
      "What counts as ‘meaningful’ consent?",
      "Did you analyse how might data collected infringe on users privacy rights, both on the data processing end of designing the system and on the implementation end of deploying it?",
      "Have you taken measures to enhance users access and control over data stored about them?",
      "Are there mechanisms to provide de-identification, anomaly-detection, anonymization or encryption of personal data?",
      "Who makes the decisions regarding data use and collection? Do you have organizational policies for it?",
    ],
    practicalExample:
      "A cash-strapped public hospital gives a private company access to patient data (scans, behaviours, and medical history) in exchange for implementing a machine learning algorithm that vastly improves doctors’ ability to diagnose dangerous conditions quickly and safely. The algorithm will only be successful if the data is plentiful and transferable, which makes it hard to predict how the data will be used in advance, and hard to guarantee privacy and to ensure meaningful consent for patients.",
  },
  {
    number: "17",
    type: "Privacy",
    title: "Personal or private information",
    preamble:
      "Aside from carefully planning what data you collect and how, it is also important to plan how it can or will be used and by whom. Whenever possible, the collection and use of personal data should be kept to a minimum, unless completely necessary and relevant. The end user’s personal data, and data derived or created about them, should be processed in a fair, lawful and legitimate way. Moreover, users have total control over the data collected and processed by the AI, in accordance with regulations, such as the GDPR.",
    issues: [
      "Ask your team:",
      "Who can access the users' data, and under what circumstances?",
      "How do you ensure that the people who access the data: 1) have a valid reason to do so; and 2) adhere to the regulations and policies related to the data?",
      "Do you keep logs of who accesses the data and when? Do the logs also tell why?",
      "Do you use existing data governance frameworks or protocols? Does your organization have its own?",
      "Who handles the data collection, storage and use?",
      "Are the data subjects able to restrict the processing of their personal data?",
      "Is it explicitly offered an opt-out option to users of the system at a regular interval?",
      "Is it offered to the data subjects a rectification option, where they can amend or modify information held by the data controller?",
      "Is it offered the right to erasure to users in accordance with Article 17 of the GDPR?",
    ],
    practicalExample:
      "More often data is becoming a valuable commodity, and giving access to third parties of personal data leads to misuse for profit. Data privacy should be carefully be taken into account. A shameful case is the Cambridge Analytic scandal, where data from users of Facebook was improperly obtained and used to influence the outcome of an election.",
  },
  {
    number: "18",
    type: "Beneficence",
    title: "Benefits, Beneficence, Well-being",
    preamble:
      "Beneficence is overlooked in the AI ethics, from the assumption that AI will certainly bring benefits no matter what. However, it is importante to ensure that real people receive benefits from AI use, to promote the flourishing of individual well-being, equal development opportunities for different regions and industries, peace and the social and common good, aswell as empowerment.",
    issues: [
      "Ask your team:",
      "Is it a goal of your system to achieve a fair, inclusive and peaceful society?",
      "Have you assessed the possible opportunities to promote well-being, individually or collectively?",
      "Are there mechanisms to ensure that data retrieved is used for the benefit of users and society?",
      "Can you consider open sourcing your solutions to share the benefits of AI development to the greatest extent?",
    ],
    practicalExample:
      "Open sourcing algorithms to emphasize the value of the development of common algorithms and open research and collaboration to support the advancement of the technology. Also, AI systems can contribute to wellbeing by helping to increase citizen’s mental autonomy, with equal distribution of economic, social and political opportunity. As en example, it can be used to aid those working in the health care sector to provide better care and support the well-being of patients.",
  },
  {
    number: "19",
    type: "Beneficence",
    title: "Peace, Social good, Common Good",
    preamble:
      "AI should not threaten peace. The use of AI has a wider impact than just on its main user base, affecting society at large, negatively or otherwise. The use of AI should not come at a cost of causing a conflict with non-users of these technologies.",
    issues: [
      "Ask your team:",
      "Have you assessed the wider societal impact of using the AI system beyond individual (end-)users? Consider stakeholders who may be indirectly affected by the system. E.g., pedestrians, family of patients.",
      "How will the system affect society when in use?",
      "What kind of systemic effects on society could the system have?",
      "Does your AI system have mechanisms to mitigate harms to ensure an overall common good for society? Evaluate benefits and harms resulting from AI.",
    ],
    practicalExample:
      "Image recognition techniques have clearly positive applications such as in the identification of malignant tumours, but can also be repurposed in ways that could be harmful, such as for mass surveillance, which can cause a huge societal distress and side effects, e.g., emigrations and imprisonment of political opponents.",
  },
  {
    number: "20",
    type: "Freedom and Autonomy",
    title:
      "Freedom, Autonomy, Consent, Choice, Self-determination, Liberty, Empowerment",
    preamble:
      "AI-based systems should be developed and used \"respecting people's autonomy, and with the aim of increasing people's control over their lives and their environment\". If people do not know when they are subject to automated decisions, they will not have the autonomy to decide whether or not to consent, or the information to reach their own conclusions about the overall value AI provides.",
    issues: [
      "Ask your team:",
      "Can you identify all circumstances where your system may create harm against human freedom? How to ameliorate them?",
      "Are there any user's freedoms being infringed upon during the use of your system?",
      "Are there mechanisms that harm end users such as tracking, censorship or surveillance implemented in your system, or that enables them?",
      "Are users well informed about the outcomes of using AI?",
      "Are there mechanisms to ensure users' autonomy? Do they have control over their decisions?",
      "Is all the use of personal data clearly articulated and agreed upon before its use?",
      "Is any of personal data being repurposed? Is it compatible with the original consent given by users?",
      "Are there mechanisms to ensure the protection to users' liberty? Liberty refers to rights such as freedom of speech, freedom of assembly and freedom of movement, as outlined in human rights legislation, e.g, EU's Charter of Fundamental Human Rights (2000) and the Universal Declaration of Human Rights (1948).",
    ],
    practicalExample:
      'A company that provides a recommendation system must not repurpose personal data provided by users to recommend ads which generates large amount of profit to the company, inducing users to buy certain products, reducing their freedom. According to the European Council: "Data processing in the context of AI systems shall be proportionate in relation to the legitimate purpose pursued through such processing, and should at all stages of the processing reflect a fair balance between the interests pursued through the development and deployment of the AI system and the rights and freedoms at stake."',
  },
  {
    number: "21",
    type: "Trust",
    title: "Trustworthiness",
    preamble:
      "The Ethics Guidelines for Trustworthy AI published by the high-level expert group on artificial intelligence (AI HLEG) by the European Comission in April 2019, has set trust as a foundational ambition and comprises three components, implying that the actors and processes involved in AI systems (including their development, deployment and use) should be: (1) lawful - complying with all applicable laws and regulations, (2) ethical - ensuring adherence to ethical principles and values, and (3) robust - both from a technical and social perspective, since, even with good intentions, AI systems can cause unintentional harm.",
    issues: [
      "Ask your team:",
      "Can you provide information that justify that your AI fulfil its intentions and the system functions as intended?",
      "Have you assessed compliance with all applicable laws and regulations? Even the extraterritorial ones (e.g., GDPR).",
      "How can you demonstrate the security of your AI? Do you keep data retrieved from these systems in a responsible way?",
      "How good is your AI confidence and ability to correctly classify information and make correct predictions, recommendations, or decisions based on data or models?",
      "Have you developed a method of measurement of accuracy of your system? Do you verify and make it visible for users the harms caused by inaccurate predictions, also measuring the the frequency of such predictions?",
      "Is there a systematic approach to increase the system's accuracy?",
      "Have you assessed transparency, safety and accountability? Read the cards for: Transparency (#1), Safety (#11) and Accountability (#14).",
    ],
    practicalExample:
      "A company that intends to trade globally must also adhere to regulations from other territories such as GDPR, this requires a multi-stakeholder approach to deal with compliance, and subsequent ethical issues related to trustworthiness like transparency, safety and accountability, through different angles and points of view.",
  },
  {
    number: "22",
    type: "Sustainability",
    title: "Sustainability, Environment (nature), Energy, Resources (energy)",
    preamble:
      "Environmental concerns reflects the growing recognition that AI, as part of our human future, will play a major role in the outcomes of our interaction with environment, and its importance will rapidly increase as climate change and environmental destruction are also hot topics of discussion. Demonstrating environmental awareness is beyond a selling point, as companies claim to be ecological while not incorporating necessary measures.",
    issues: [
      "Ask your team:",
      "Did you assess the environmental impact of the system's development, deployment, and use? E.g., the type of energy used by the data centers.",
      "Did you consider the environmental impact when selecting specific technical solutions?",
      "Can you ensure ecologically sustainable outcomes from your decision-making?",
      "Did you ensure measures to reduce the environmental impact of your system's life cycle?",
      "Do you systematically evaluate energy efficiency towards a minimal ecological footprint?",
      "Did you assess alternatives to devices or service providers, preferring those that use renewable materials, promote resource efficiency and reduce waste?",
    ],
    practicalExample:
      "High level of computing power comes at the expense of consuming large amounts of electric energy, and power-consuming entities are growing, e.g, high performance computing, large data centers. It is crucial to improve energy efficiency for devices using AI, reducing the energy required by the computing systems and resources needed to operate them. A company could sample all the components' power consumption at regular intervals serving as input data for energy-efficiency optimization, also storing device workload information and different usage metris. Consider using a cloud resource allocation technique that optimizes energy efficiency.",
    tools: [
      {
        name: "TransparentAI",
        link: "https://github.com/Nathanlauga/transparentai",
      },
    ],
  },
  {
    number: "23",
    type: "Dignity",
    title: "Dignity",
    preamble:
      "AI-based systems have brought automation of several mundane tasks, saving people time and effort, but this convenience could threaten our sense of achievement, self-acutalisation, and dignity as humans.",
    issues: [
      "Ask your team:",
      "What types of tasks can feasibly be automated using our system or other technologies that could affect people's job?",
      "What we might expect to be automated in the near future?",
      "What effect is our automation having on people's daily lives? Does that constitute a threat to their dignity? Read the first chapter of the EU Charter, where principle of dignity is outlined.",
      "What trade-offs have been considered between making people’s lives more convenient versus promoting dignity?",
      "Did we implement mechanisms to ensure that our AI is not confused with human beings?",
      "Did we make clear to the user that they are interacting with AI and no another human being?",
    ],
    practicalExample:
      "Anxieties in humans who rely on technology have increased, and they may lose their creative, intellectual and emotional capacities. These capacities are essential to individuals’ ability to realise their life plans autonomously and thoughtfully. A company implementing AI should not enable human decline and obsolescence - and the associated fears of deskilling, atrophy, homogenisation, and loss of cultural diversity. These fears also arise in the displacement of human labour and employment by AI and robots because, beyond subsistence, work is a source of meaning and identity.",
  },
  {
    number: "24",
    type: "Solidarity",
    title: "Solidarity, Social security, Cohesion",
    preamble:
      "Individualised profiling might threaten solidarity in society, and the availability of data might worsen power imbalances between governments and companies on the one hand, and individuals on the other. Personalisation of services and information may bring economic and individual benefits, but risks creating or furthering divisions and undermining community solidarity. AI should promote social security and cohesion and should not jeopardise societal bonds and relationships.",
    issues: [
      "Ask your team:",
      "What kinds of inferences about groups and individuals can be drawn from publicly or privately available data?",
      "What evidence is there that using these conclusions to target information and services is more effective and with respect to what purposes?",
      "What kinds of messages, interventions and services are already being personalised in our system, and in what sectors?",
      "Did we implement mechanisms to get the benefits of personalisation and respect the ideals of solidarity and citizenship?",
      "Did we evaluate to what extent personalisation done with our system influences relevant outcomes and attitudes (e.g., user satisfaction, consumer behaviour, voting patterns)?",
      "In what contexts do our users or people affected by our system approve individualised information or options specifically tailored to a particular 'profile' that they fit into as beneficial to their lives? In what contexts is it harmful?",
      "How much should we restrict personalisation of advertising and public services for the sake of preserving ideals of citizenship and solidarity?",
    ],
    practicalExample:
      "There is a growing concern with AI been used to disseminate fake news (using text fake news generator or deep fake for videos), as its potential to surveil and invade individuals’ privacy, therefor having the capacity to be used to undermine and jeopardise societal relationships and solidarity. A company developing AI-based system ought to consider if the AI supports rich and meaningful social interaction, both professionaly and in private life, and not support segregation and division, within the design and development process.",
  },
  {
    number: "25",
    type: "Assessment",
    title: "Overall ethical evaluation",
    preamble:
      "There is an urgent concern whether the algorithmic system continues to work in the right way once deployed, needs to be revised, or can be improved, in regular intervals. Also, minimizing negative impacts of the system is financially important for any developer organization, as incidents are often costly.",
    issues: [
      "Ask your team:",
      "Did you include relevant stakeholders throughout the assessment of the system? (card #0)",
      "Did you discuss risks? (card #11)",
      "Have you discussed auditability? (card #14)",
      "Have you discussed redress issues? (card #10)",
      "Have you discussed allocation of responsibilities within the organisation? (card #13)",
      "Are the people involved with the development of the system also involved with it during its operational life? If not, they may not feel as accountable.",
      "Are you aware of laws related to the system?",
      "Can users of the system somehow report vulnerabilities, risks and other issues in the system?",
      "With whom have you discused accountability and other ethical issues related to the system, including grey areas?",
      "Have you discussed possible trade-offs?",
      "Did you implement mechanisms to evaluate the system?",
      "What is the time interval between evaluations?",
      "Did you document the system modifications?",
      "Is the documentation of the system, including its modifications and trade-offs (card #4), available to the stakeholders involved and the general public?",
    ],
    practicalExample:
      "Periodic evaluations should be carried out in order to test the system in ethical terms, even after the deployment. A company developing AI-based systems should also recognise that positive and ethical characteristics are open to progressive increase, i.e. an algorithm may be increasingly fairer, and fairer than another algorithm or an earlier version, but it does not make sense to say that it is fair or unfair in absolute terms (compare this with the case of speed: it makes sense to say that an object moves fast, or that it is fast or faster than another, but not that it is fast in absolute terms).",
  },
];
