# MerakiDashboardApi.CreateOrganizationActionBatch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **Boolean** | Set to true for immediate execution. Set to false if the action should be previewed before executing. This property cannot be unset once it is true. Defaults to false. | [optional] 
**synchronous** | **Boolean** | Set to true to force the batch to run synchronous. There can be at most 20 actions in synchronous batch. Defaults to false. | [optional] 
**actions** | [**[OrganizationsorganizationIdactionBatchesActions]**](OrganizationsorganizationIdactionBatchesActions.md) | A set of changes to make as part of this action (<a href='https://developer.cisco.com/meraki/api/#/rest/guides/action-batches/'>more details</a>) | 


