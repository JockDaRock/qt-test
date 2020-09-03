# MerakiDashboardApi.NetworksnetworkIdgroupPoliciesSchedulingWednesday

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true. | [optional] 
**from** | **String** | The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed. | [optional] 
**to** | **String** | The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed. | [optional] 


