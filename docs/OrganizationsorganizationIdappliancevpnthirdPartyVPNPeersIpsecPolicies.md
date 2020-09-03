# MerakiDashboardApi.OrganizationsorganizationIdappliancevpnthirdPartyVPNPeersIpsecPolicies

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ikeCipherAlgo** | **[String]** | This is the cipher algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: &#x27;aes256&#x27;, &#x27;aes192&#x27;, &#x27;aes128&#x27;, &#x27;tripledes&#x27;, &#x27;des&#x27; | [optional] 
**ikeAuthAlgo** | **[String]** | This is the authentication algorithm to be used in Phase 1. The value should be an array with one of the following algorithms: &#x27;sha256&#x27;, &#x27;sha1&#x27;, &#x27;md5&#x27; | [optional] 
**ikePrfAlgo** | **[String]** | [optional] This is the pseudo-random function to be used in IKE_SA. The value should be an array with one of the following algorithms: &#x27;prfsha256&#x27;, &#x27;prfsha1&#x27;, &#x27;prfmd5&#x27;, &#x27;default&#x27;. The &#x27;default&#x27; option can be used to default to the Authentication algorithm. | [optional] 
**ikeDiffieHellmanGroup** | **[String]** | This is the Diffie-Hellman group to be used in Phase 1. The value should be an array with one of the following algorithms: &#x27;group14&#x27;, &#x27;group5&#x27;, &#x27;group2&#x27;, &#x27;group1&#x27; | [optional] 
**ikeLifetime** | **Number** | The lifetime of the Phase 1 SA in seconds. | [optional] 
**childCipherAlgo** | **[String]** | This is the cipher algorithms to be used in Phase 2. The value should be an array with one or more of the following algorithms: &#x27;aes256&#x27;, &#x27;aes192&#x27;, &#x27;aes128&#x27;, &#x27;tripledes&#x27;, &#x27;des&#x27;, &#x27;null&#x27; | [optional] 
**childAuthAlgo** | **[String]** | This is the authentication algorithms to be used in Phase 2. The value should be an array with one of the following algorithms: &#x27;sha256&#x27;, &#x27;sha1&#x27;, &#x27;md5&#x27; | [optional] 
**childPfsGroup** | **[String]** | This is the Diffie-Hellman group to be used for Perfect Forward Secrecy in Phase 2. The value should be an array with one of the following values: &#x27;disabled&#x27;,&#x27;group14&#x27;, &#x27;group5&#x27;, &#x27;group2&#x27;, &#x27;group1&#x27; | [optional] 
**childLifetime** | **Number** | The lifetime of the Phase 2 SA in seconds. | [optional] 

<a name="[IkePrfAlgoEnum]"></a>
## Enum: [IkePrfAlgoEnum]

* `prfsha256` (value: `"prfsha256"`)
* `prfsha1` (value: `"prfsha1"`)
* `prfmd5` (value: `"prfmd5"`)
* `default` (value: `"default"`)

