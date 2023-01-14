# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
# Ticket 1 must be implemented before 2, 3 and 4 can be implemented based on business decisions

1. **Name:** Add agent custom Id to the the Facilities schema
    - **Description:** We need to have a custom id for each agent in the Facilities table schema
    - **Acceptance criteria:** The table schema must have the new field
    - **Implementation details:** A new field should be added to the Facilities table model/schema. This field can be called agentCustomId (this is different from the Id database id of the agent).
    - **Estimate:** 2-3 hours
    - **priority:** High

2. **Name:** Save agent custom Id (Link: ticket 1)
    - **Description:** We need to save the agentCustomId created in ticket 1
    - **Acceptance criteria:** Newly saved record in the Facilities table must contain agentCustomId and uniqie to each agent
    - **Implementation details:** The function that saves agent records to Facilities table should generate agentCustomId, if it does not exists, If it does, use the existing one, attach to the data, and save to the table.
    - **Estimate:** 2-5 hours
    - **priority:** High

3. **Name:** Use saved agent custom Id in the generated report (Link: ticket 2)
    - **Description:** We need to use the agentCustomId created in ticket in the report
    - **Acceptance criteria:** Report should have the agentCustomId
    - **Implementation details:** The function `generateReport` should be modified to accomodate the agentCustomId in the report
    - **Estimate:** 2-5 hours
    - **priority:** High

4. **Name:** Update current Facilitites data to have the new field (agentCustomId)
    - **Description:** We need to make sure existing data have the new field, agentCustomId
    - **Acceptance criteria:** All record in the Facilities table have agentCustomId
    - **Implementation details:** This can be done in several ways based on the database design. I would suggest we run a script that generates the agentCustomId or fecth existing ones(if any) and update old records
    - **Estimate:** 2-6 hours
    - **priority:** High