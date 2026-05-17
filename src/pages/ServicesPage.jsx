import ServicesHero from '../components/ServicesHero'
import ServicesOverview from '../components/ServicesOverview'
import ServiceDetail from '../components/ServiceDetail'
import ServicesClosing from '../components/ServicesClosing'
import ServicesCTA from '../components/ServicesCTA'

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetail
        number="01"
        title="Accounting & Financial Management"
        oneLine="Building a reliable financial foundation for your business."
        whereHelps="As operations grow, financial tracking and reporting need to become more structured, consistent, and reliable."
        bullets={[
          'Day-to-day accounting and transaction management',
          'Financial reporting and MIS',
          'Bank, vendor, and ledger reconciliations',
          'Accounts payable and receivable management',
          'Month-end and year-end closure',
        ]}
        outcome="Clear, accurate, and timely financial information that supports confident decision-making."
        howWeWork="We align financial processes with your business operations to ensure consistency and long-term reliability."
      />
      <ServiceDetail
        number="02"
        title="Strategic Finance (Virtual CFO)"
        oneLine="Supporting financial planning and decision-making at every stage of growth."
        whereHelps="When decisions need to be backed by clear financial insights and forward-looking visibility."
        bullets={[
          'MIS design and performance dashboards',
          'Cash flow planning and monitoring',
          'Profitability and cost analysis',
          'Budgeting and financial planning',
          'Business performance tracking',
        ]}
        outcome="Improved visibility, better control, and more confident financial decisions."
        howWeWork="We build practical financial frameworks that integrate with your existing operations and decision-making processes."
      />
      <ServiceDetail
        number="03"
        title="Business Systems & Process Consulting"
        oneLine="Designing systems that bring consistency to operations."
        whereHelps="When operations expand and informal processes start creating inefficiencies and dependency."
        bullets={[
          'SOP design and documentation',
          'Workflow structuring and process improvement',
          'ERP and system implementation support',
          'Operational tracking and reporting frameworks',
        ]}
        outcome="Structured operations with reduced dependency on individuals and improved efficiency."
        howWeWork="We design and implement systems that are practical, adaptable, and aligned with your business workflow."
      />
      <ServiceDetail
        number="04"
        title="Compliance & Governance"
        oneLine="Building confidence through structured compliance and control."
        whereHelps="When compliance requirements increase and need to be managed consistently and proactively."
        bullets={[
          'GST, TDS, and regulatory compliance',
          'Compliance tracking systems',
          'Governance framework design',
          'Audit preparation and support',
        ]}
        outcome="Stronger compliance, reduced risk, and better control across operations."
        howWeWork="We integrate compliance into your regular processes to ensure consistency rather than last-minute corrections."
      />
      <ServiceDetail
        number="05"
        title="Internal Audit & Control Review"
        oneLine="Evaluating and strengthening internal systems and controls."
        whereHelps="When businesses need greater visibility into risks, inefficiencies, and control gaps."
        bullets={[
          'Internal audit reviews',
          'Process and control evaluation',
          'Risk identification and mitigation',
          'Improvement recommendations and implementation support',
        ]}
        outcome="Improved efficiency, reduced risk exposure, and stronger internal controls."
        howWeWork="We focus on practical improvements that can be implemented and sustained within your operations."
      />
      <ServiceDetail
        number="06"
        title="HR & People Advisory"
        oneLine="Structuring people and processes to support growth."
        whereHelps="When teams grow and require clearer roles, processes, and performance structures."
        bullets={[
          'Role definition and organization structuring',
          'HR policies and process design',
          'Performance tracking frameworks',
          'HRMS implementation support',
        ]}
        outcome="Clear accountability, structured processes, and scalable team management."
        howWeWork="We build people systems that align with business goals and support long-term growth."
      />
      <ServicesClosing />
      <ServicesCTA />
    </>
  )
}

export default ServicesPage
