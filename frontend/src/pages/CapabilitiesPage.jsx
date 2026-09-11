import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function CapabilitiesPage() {
  const steps = [
    {
      title: 'DESIGN ENGINEERING AND MANUFACTURING SOLUTIONS',
      icon: '/uploads/2023/06/DEMS-icon-1.png',
      desc: 'Design Engineering and Manufacturing Solutions (DEMS) is the One-Stop service offered at Best Cast that involves the study and selection of design methodologies, engineering materials, manufacturing processes and quality control used in the design, development and manufacture of engineered components. Best Cast expertise lies in delivering superior quality products to our customers at the most competitive prices. We deploy a diverse array of software programmes to develop and test components based on customer specifications. Our company provides end-to-end solutions that encompass the Design phase, Rapid prototyping, in addition to Manufacturing of finished goods. Best Cast has worked with more than 120 pre-approved suppliers internationally to guarantee the highest quality and fastest turnaround times. We collaborate extensively with both customers and suppliers to determine the most efficient means to manufacture each component This includes gathering detailed project information, including part specifications, material properties, production volumes, and budget considerations. In terms of project management at Best Cast, as well as our global supplier footprint, we bring technical competency and reliability to every project while delivering components of any specification and process.'
    },
    {
      title: 'NEW PRODUCT DEVELOPMENT',
      icon: '/uploads/2023/06/NPD-icon-1.png',
      desc: 'Best Cast adheres to IATF standards and Quality Management Systems (QMS) that follow the AIAG Key Elements, which include Failure Mode and Effects Analysis (FMEA), Statistical Process Control (SPC), Measurement Systems Analysis (MSA), and Production Part Approval Process (PPAP). Our company manages all of its projects using Advanced Product Quality Planning (APQP), and our workforce is equipped with well-defined roles and responsibilities to ensure that the highest quality standards are met. In addition to our advanced manufacturing and testing capabilities, Best Cast will set up a customised, comprehensive project plan that ensures total customer transparency throughout all project stages, resulting in effective communication for a prosperous launch.'
    },
    {
      title: 'TOOL ROOM',
      icon: '/uploads/2023/06/Tool-Room-icon-1.png',
      desc: 'Tool design and development is a crucial aspect of the die casting process at our manufacturing company. Our manufacturing company prioritises these critical steps to ensure the production of the highest quality products for our valued customers. Our die casting process is dependent on the accuracy and dependability of our tools, specifically our dies and moulds. The process involves identifying the need for a new tool or an improvement in an existing tool, designing and prototyping the tool, testing and evaluating its performance, and finally manufacturing the tool at scale. Our expert team of designers, engineers, and project managers are dedicated to ensuring the highest quality of our tools. We meticulously simulate the performance of each tool under various conditions to identify any potential issues such as interference, stress concentration, and wear. Rest assured that our team will be involved at every step of the manufacturing process to ensure the best possible outcome for our customers. Our company is committed to providing top-quality products that are designed for optimal performance and longevity. We take pride in our ability to make necessary design refinements that not only improve product performance but also reduce costs. At Best Cast, We specialise in designing the finest feeding systems that optimise workflow and minimise project delays. Our company recognises the importance of utilising advanced data analytics in order to guarantee the highest level of quality and consistency in our finished goods.'
    },
    {
      title: 'ALLOY MAKING',
      icon: '/uploads/2023/06/Alloy-icon-1.png',
      desc: 'At our alloying facility, we meticulously combine the essential elements into the molten metal. As the mixture cools, solid, homogeneous ingots are formed, resulting in a high-quality material with the desired properties. The addition of elements to the aluminium material gives the alloy improved strength, corrosion resistance, electrical conductivity, density, workability, and other properties of the base metal, making it suitable for various applications. We also offer customisation to meet specific performance requirements. An in-house BestCast alloy foundry provides additional durability over purchasing pre-cast alloys. We strive to reduce transport and packaging costs, as well as the carbon footprint associated with the production process. This approach ensures the highest quality and most precise specifications for our ingots.'
    },
    {
      title: 'SHELL CORE MAKING',
      icon: '/uploads/2023/06/SCM-icon-1.png',
      desc: 'The shell core manufacturing process involves creating a shell of sand and resin around a heated metal pattern. After the molten metal is poured into the mould, a hollow cavity with the desired shape is formed in the casting. Best Cast specialises in Shell Core Making and produces complex cores for small and large castings across a wide range of applications and industries. We have in-house expertise in various shell core manufacturing processes as well as shell core boxes.'
    },
    {
      title: 'GRAVITY DIE CASTING',
      icon: '/uploads/2023/06/GDC-icon-1.png',
      desc: 'With over five decades of expertise in Gravity Die Casting, also known as Permanent Mould Casting, Best Cast Foundry can manufacture aluminium castings up to 50 kilogrammes in weight with the use of metal, shell, or sand cores in order to produce intricate internal features. The degree of dimensional accuracy and shape precision that our Castings deliver is substantially high. Gravity die castings deliver a cost-effective solution for high volume requirements. Our foundry leverages extensive knowledge and deep industry experience to provide highly competitive solutions. With comprehensive capabilities across the entire spectrum of Die Casting processes, Best Cast meticulously controls quality to ensure that the final casting meets all reliability, durability, and safety standards.'
    },
    {
      title: 'HEAT TREATMENT',
      icon: '/uploads/2023/06/HT-icon-1.png',
      desc: 'Best Cast has advanced machinery for heat treatment of aluminium castings, specifically designed for Solution & Precipitation Treatment (T6 condition). Our foundry produces aluminium castings that are primarily used in the \'as cast\' condition. However, we also cater to specific applications that demand superior mechanical properties or distinct properties from the as-cast material. The heat treatment of aluminium castings is carried out to change the properties of the as cast alloys by subjecting the casting to a thermal cycle or series of thermal cycles. Our furnaces are meticulously engineered to facilitate uniform heat transfer across all areas of the castings. With drop quench furnaces enabling rapid quenching and uniform convective heating, our carefully designed fan and duct configurations guarantee precise temperature uniformity throughout the load chamber and parts. At Best Cast, our consistent commitment to quality is reflected in the strict adherence to comprehensive quality control measures throughout our heat treating processes.'
    },
    {
      title: 'PRECISION CNC MACHINING',
      icon: '/uploads/2023/06/CNC-icon-1.png',
      desc: 'Best Cast offers a comprehensive range of CNC machining capabilities, catering to both rapid prototyping, low-volume production, and high-volume production of end-use components. In addition to our state-of-the-art equipment capabilities, Best Cast operates on a well-defined manufacturing strategy, leveraging advanced machinery, cutting-edge tools, and sophisticated software. This enables us to produce complex parts with unparalleled accuracy and efficiency, meeting the most demanding requirements. We take great pride in our team of highly skilled machinists who possess expertise in operating CNC machines. We utilize the latest techniques and adhere to stringent quality control measures, ensuring exceptional precision in every part we manufacture. To support our machine shop, we have a dedicated temperature-controlled inspection department equipped with Coordinate Measuring Machines (CMM), as well as a wide range of conventional measuring equipment.'
    }
  ];

  const secondaryFinishing = [
    { title: 'TRIMMING', desc: 'Trimming is the process of removing excess material, such as flash or gate marks, from the casting using a cutting tool or grinder. This process is necessary to achieve the desired shape and dimensions of the casting.' },
    { title: 'DEBURRING', desc: 'Deburring is the process of removing any burrs or sharp edges from the casting using a grinding or polishing tool. This process can help to improve the casting’s appearance and reduce the risk of injury during handling.' },
    { title: 'SANDING & POLISHING', desc: 'Sanding and Polishing are processes used to smooth the surface of the casting and to create a high-quality, mirror-like finish. These processes can be performed manually or using automated equipment, such as buffing machines.' },
    { title: 'SHOT BLASTING', desc: 'Shot Blasting is a surface finishing process that is commonly used on die cast products. It involves the use of high-velocity steel abrasive particles or shot to blast the surface of the die cast product to remove any remaining impurities, such as burrs, flash, scale, or other surface contaminants.' },
    { title: 'IMPREGNATION', desc: 'Impregnation is a process that seals porosity, providing components that are waterproof. A really workable solution that will both increase your yields and cut down on your scrap. It is often crucial for the die cast part to be impregnated when the skin of the casting must be removed in order to produce a leak-free component.' },
    { title: 'PAINTING & POWDER COATING', desc: 'Painting refers to the procedure of imparting a protective or decorative coating to the surface of a casting. Lacquer, moist spray, and enameling are the most prevalent types of painted coatings. Powder coating is one of the most commonly used coatings on die cast products. When cured at high temperatures, the finish is significantly more durable, chemically resistant, and resistant to scratching and UV fading compared to painted surfaces.' },
    { title: 'HARD ANODISING', desc: 'Hard anodising is a type of anodising process used to create a thicker and more durable oxide layer on the surface of a die cast product. The process involves an electrolytic process that converts the surface of a metal object into an oxide layer, which provides improved corrosion resistance, increased surface hardness, and other desirable properties.' },
    { title: 'ALOCHROMING', desc: 'Aluminium may be strengthened and polished by the use of a chemical solution in the Alochroming, which is commonly known as Chromating or Anodising. Chromating applies a chemical solution to the casting so that it may be preserved for longer. The Alochroming process can be done by chemically by using this method. The Alochroming process makes the material more corrosion-resistant.' },
    { title: 'ELECTROLESS NICKEL', desc: 'Instead of employing electricity, nickel is submerged in a specific solution during our electroless nickel plating process. Our solution guarantees a consistent and reliable coat. Options with low to high-phosphorus levels are offered. Bath’s phosphorus content. As the concentration of phosphate falls, nickel’s density increases. Although the low-concentration finish is delicate, it has excellent wear characteristics, and high-concentration finish enhances ductility.' },
    { title: 'SILVER PLATING', desc: 'Excellent electrical, thermal conductivity, and corrosion resistance are provided by aluminium silver plating for vital applications in power transmission and distribution applications. Inexpensive yet prone to tarnishing when exposed to the environment. In addition to having good lubricity and anti-galling qualities in high-temperature applications, silver is very ductile, malleable, and solderable.' }
  ];

  const inspectionMethods = [
    { title: 'VISUAL INSPECTION', desc: 'Our inspection process includes a thorough visual examination which can be conducted manually or with the assistance of specialized equipment like magnifying glasses and borescopes. This method allows us to identify surface defects such as cracks, porosity, and surface finish.' },
    { title: 'DIMENSIONAL INSPECTION', desc: 'This inspection method involves measuring the dimensions of the die cast part using specialised equipment such as Coordinate Measuring Machines (CMMs), Profile Projectors and Speciality Gauges. This inspection method ensures that the parts meet the required dimensional tolerances.' },
    { title: 'CHEMICAL ANALYSIS', desc: 'This inspection method involves the use of chemical analysis techniques such as spectroscopy and chromatography to analyse the composition of the die cast part. This inspection ensures that the part meets the required chemical composition standards.' },
    { title: 'MECHANICAL TESTING (UTM)', desc: 'This inspection method involves testing the mechanical properties of the die cast part, such as Tensile Strength, Elongation, Yield. This inspection ensures that the parts meet the required mechanical properties standard, so that the final product meets all reliability, durability, safety and cost parameters.' },
    { title: 'PENETRANT TESTING', desc: 'Our advanced technology can accurately identify even the smallest microscopic fissures, cavities, and surface discontinuities on a wide range of materials. Our castings undergo immersion in penetrant, which is then drawn into any discontinuity through capillary action. Our casting undergoes a thorough inspection process using ultraviolet light to detect any surface indications and ensure its integrity.' },
    { title: 'HELIUM LEAK TESTING', desc: 'Helium leak detection technique is far more precise and dependable when compared to conventional atmospheric air leak testing. Our Helium Leak Testing service is a non-destructive quality control inspection that ensures our manufactured components are leak-proof and free from any potential leaks. We also perform dry and hydro leak testing in addition to helium leak testing.' },
    { title: 'ULTRASONIC INSPECTION', desc: 'The ultrasonic inspection method utilises high frequency sound waves to thoroughly examine the internal structure of your die cast parts. Our inspection process is designed to detect internal defects, including voids, cracks, and inclusions that are not visible through standard visual inspection methods.' },
    { title: 'RADIOGRAPHIC INSPECTION', desc: 'One of the best ways to find flaws like porosity is radiographic examination. X-rays are directed towards the direction of the casting as part of the radiography procedure. While some X-rays are absorbed by the casting, others travel through and are detected by digital detectors to produce pictures. If the casting satisfies the acceptance requirements, it may be determined by looking at the generated photographs.' },
    { title: 'ULTRASONIC CLEANING AND MILLIPORE TESTING', desc: 'Through the application of an ultrasonic solution on inert, non-absorbent components, pollutants including dust, fibres, oils, metal chips/fines, and soot may be removed from intricately shaped areas like cavities, blind holes, tubes, fissures, and crevices for further Millipore testing. After the casting has been cleaned, the component is put through Millipore testing to establish its maximum impurity value. It represents an index of cleanliness.' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '5rem 0' }}>
      <div className="bc-container">
        {/* Step-by-step sequential processes with downward arrows */}
        {steps.map((step, idx) => (
          <div key={idx} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <img 
              src={step.icon} 
              alt={step.title} 
              style={{ width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto 1.2rem auto' }} 
            />
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: 900,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#111111',
              marginBottom: '1.2rem'
            }}>
              {step.title}
            </h2>
            <p style={{
              maxWidth: '960px',
              margin: '0 auto',
              fontSize: '0.92rem',
              lineHeight: '1.9',
              color: '#555555'
            }}>
              {step.desc}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
              <ChevronDown size={32} color="#cccccc" />
            </div>
          </div>
        ))}

        {/* SECONDARY FINISHING PROCESSES */}
        <div style={{ textAlign: 'center', margin: '5rem 0 3rem 0' }}>
          <img 
            src="/uploads/2023/06/SFP-icon-1.png" 
            alt="Secondary Finishing Processes" 
            style={{ width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto 1.2rem auto' }} 
          />
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#111111',
            marginBottom: '1rem'
          }}>
            SECONDARY FINISHING PROCESSES
          </h2>
          <p style={{
            maxWidth: '920px',
            margin: '0 auto 3rem auto',
            fontSize: '0.92rem',
            lineHeight: '1.8',
            color: '#555555'
          }}>
            Best Cast's expertise in finishing processes encompasses a range of operations performed to improve the surface finish, dimensional accuracy, appearance, performance, and durability of castings. The specific finishing processes used for each product depend on the desired properties of the final component and the requirements of the application.
          </p>

          <div className="bc-two-col-grid">
            {secondaryFinishing.map((item, i) => (
              <div key={i}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#111111' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#666666' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
            <ChevronDown size={32} color="#cccccc" />
          </div>
        </div>

        {/* INSPECTION & ASSESSMENT */}
        <div style={{ textAlign: 'center', margin: '5rem 0' }}>
          <img 
            src="/uploads/2023/06/IA-icon-1.png" 
            alt="Inspection & Assessment" 
            style={{ width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto 1.2rem auto' }} 
          />
          <h2 style={{
            fontSize: '1.35rem',
            fontWeight: 900,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#111111',
            marginBottom: '0.8rem'
          }}>
            INSPECTION & ASSESSMENT
          </h2>
          <p style={{
            maxWidth: '850px',
            margin: '0 auto 3.5rem auto',
            fontSize: '0.9rem',
            color: '#666666'
          }}>
            The majority of our inspection techniques are based on Non-Destructive Testing (NDT) Methods.
          </p>

          <div className="bc-two-col-grid">
            {inspectionMethods.map((m, i) => (
              <div key={i}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#111111' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#666666' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INFRASTRUCTURE GALLERY MOSAIC */}
        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
          <h2 className="bc-section-title-clean">INFRASTRUCTURE GALLERY</h2>
          <div className="bc-mosaic-grid">
            {[
              '/uploads/2023/03/DieCast-Foundry-2-400x516.jpg',
              '/uploads/2023/03/DieCast-Foundry-4-400x516.jpg',
              '/uploads/2023/03/Gravity-Die-Casting-1-400x516.jpg',
              '/uploads/2023/03/Gravity-Die-Casting-2-400x516.jpg',
              '/uploads/2023/03/Gravity-Die-Casting-3-400x516.jpg',
              '/uploads/2023/03/Robotic-Autopour-400x516.jpg',
              '/uploads/2023/03/CNC-Machining-1-1-400x516.jpg',
              '/uploads/2023/03/CNC-Machining-2-400x516.jpg',
              '/uploads/2023/03/CNC-Machining-3-400x516.jpg',
              '/uploads/2023/03/Inspection-1-400x516.jpg',
              '/uploads/2023/03/Inspection-2-400x516.jpg',
              '/uploads/2023/03/Inspection-3-400x516.jpg',
              '/uploads/2023/03/Helium-Leak-Test-400x516.jpg',
              '/uploads/2023/03/CMM-2D-Spectrometer-400x516.jpg',
              '/uploads/2023/03/Ultrasonic-Washing-1-400x516.jpg'
            ].map((img, i) => (
              <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                <img src={img} alt={`Infrastructure facility ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
