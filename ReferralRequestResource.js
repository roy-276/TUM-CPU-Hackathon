const referralRequest = {
  resourceType: 'ReferralRequest',
  id: 'example-referral-request',
  status: 'draft',
  intent: 'order',
  type: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v2-0276',
        code: 'RP',
        display: 'Referral',
      },
    ],
  },
  priority: 'routine',
  subject: {
    reference: 'Patient/example-patient',
  },
  requester: {
    reference: 'Practitioner/example-practitioner',
  },
  recipient: [
    {
      reference: 'Practitioner/example-specialist',
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '183729009',
          display: 'Diagnosis: Acute bronchitis (disorder)',
        },
      ],
    },
  ],
  description: 'Referral for specialist consultation',
};

const axios = require('axios');

axios
  .post('http://example.com/fhir/ReferralRequest', referralRequest, {
    headers: {
      'Content-Type': 'application/fhir+json',
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
