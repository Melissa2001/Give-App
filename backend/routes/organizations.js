const express = require('express');
const router = express.Router();
const Organization = require('../models/organization');

router.get('/', async (req, res) => {
  try {
    const organizations = await Organization.find();

    res.status(200).json(organizations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/reg', async (req, res) => {
    let organization=new Organization({
        name:req.body.name,
        email_id:req.body.email,
        password:req.body.password,
        reg_no:req.body.regno,
        })
    
        organization=await organization.save();
        if(!organization)
        return res.status(400).send('Organization Cannot be created');
    
        res.send(organization);
  });

  router.put('/:id', async (req, res) => {
    try {
      const organizationId = req.params.id;
      const { desc, phone, upi } = req.body;
  
      // Find the organization by ID
      const organization = await Organization.findById(organizationId);
  
      if (!organization) {
        return res.status(404).json({ message: 'Organization not found' });
      }
  
      // Update the organization fields
      organization.description = desc;
      organization.Phone_no = phone;
      organization.upi_id = upi;
  
      // Save the updated organization
      const updatedOrganization = await organization.save();
  
      res.status(200).json(updatedOrganization);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports = router;