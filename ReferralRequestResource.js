// Import the `uuid` module to generate a unique identifier
const uuid = require('uuid');

// Define the ReferralRequest resource as a JSON object
const referralRequest = {
  resourceType: 'ReferralRequest',
  id: uuid.v4(), // Generate a unique identifier for the referral request
  status: 'active', // Set the status to "active"
  subject: {
    // Set the subject of the referral request
    reference: 'Patient/example',
    display: 'John Doe',
  },
  requester: {
    // Set the requester of the referral request
    reference: 'Practitioner/example',
    display: 'Dr. Jane Smith',
  },
  specialty: {
    // Set the specialty of the referral request
    coding: [
      {
        system: 'http://snomed.info/sct',
        code: '394585001',
        display: 'Cardiology',
      },
    ],
  },
  recipient: [
    {
      // Set the recipient of the referral request
      reference: 'Organization/example',
      display: 'XYZ Hospital',
    },
  ],
  reasonCode: [
    {
      // Set the reason for the referral request
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '162864005',
          display: 'Chest pain',
        },
      ],
    },
  ],
  authoredOn: '2023-04-13T12:00:00Z',
  // Set the date/time the referral request was authored
};

// Convert the referral request JSON object to a string
const referralRequestString = JSON.stringify(referralRequest);

// Output the referral request JSON string
console.log(referralRequestString);
