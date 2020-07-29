##Safe Patterns

* en_label :

 `/^[a-zA-Z0-9-_ ]{0,250}$/`

* unicode_label :

 `/^[\s\w\u0600-\u06FFs]{0,250}$/`

* label :

 `/^[\s\w\u0600-\u06FFs]{0,250}$/`

* publicKey :

 `/^[\s\d\w]{0,3000}$/`

* description :

 `/^[\s\w\u0600-\u06FFs]{0,5000}$/`

* email :

 `/^[\w-.]{1,50}@[\w-.]{1,50}\.[\w-.]{1,50}$/`

* mobile :

 `/^((\+[0-9]{1,2})|0)9[0-9]{9}$/`

* number :

 `/^[0-9]*$/`

* complexWord :

 `/^[\s\d\w\u0600-\u06FFs_+=:!@#$%^&*()+.\/\/-]*$/`

* password :

 `/^[\s\d\w\u0600-\u06FFs_+=:;!@#$%^&*()+<>,.\/-]{8,16}$/`

* password16 :

 `/^[\s\d\w\u0600-\u06FFs_+=:;!@#$%^&*()+<>,.\/\/-]{16,32}$/`

* passwordN :

 `/^[\s\d\w\u0600-\u06FFs_+=:;!@#$%^&*()+<>,.\/\/-]{8,}$/`

* alphaNumeric :

 `/^[\w\d]+$/`

* license :

 `/^[\w\d]{25}$/`

* vpnHexKey :

 `/^[a-fA-F\d]{64}$/`

* vpnHexIV :

 `/^[a-fA-F\d]{32}$/`

* vpnPassword :

 `/^[A-Za-z0-9@#$%^&!+=]{8,16}$/`

##Un-Safe Patterns

###Use Atomic group to solve this(or use `re2` or `validator.js`)

* link :

 `/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/`
