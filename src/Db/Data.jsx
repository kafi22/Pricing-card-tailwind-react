
const Data = [

    {
        title : 'Hobby',
        currency : 'usd',
        price : 24,
        frequency : '/month',
        description : 'the essentials to provide you the best work for clients',
        feature : [
            '5 product',
            'up to 1000 subscribers',
            'basic analytics',
            '48- hour support response time'
        ],
        cta : 'start making your trial',
        mostpopular : false,
        id : Date.now(),
        icons : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_77)">
        <path d="M6 19H18V9.157L12 3.703L6 9.157V19ZM19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H1L11.327 1.612C11.5111 1.44448 11.7511 1.35164 12 1.35164C12.2489 1.35164 12.4889 1.44448 12.673 1.612L23 11H20V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21ZM7.5 13H9.5C9.5 13.663 9.76339 14.2989 10.2322 14.7678C10.7011 15.2366 11.337 15.5 12 15.5C12.663 15.5 13.2989 15.2366 13.7678 14.7678C14.2366 14.2989 14.5 13.663 14.5 13H16.5C16.5 14.1935 16.0259 15.3381 15.182 16.182C14.3381 17.0259 13.1935 17.5 12 17.5C10.8065 17.5 9.66193 17.0259 8.81802 16.182C7.97411 15.3381 7.5 14.1935 7.5 13Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1_77">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    },

    {
        title : 'Professional',
        currency : 'usd',
        price : 34,
        frequency : '/month',
        description : 'the essentials to provide you the best work for clients',
        feature : [
            '25 product',
            'up to 10,000 subscribers',
            'advance analytics',
            '48- hour support response time',
            'Making automation'
        ],
        cta : 'start making your trial',
        mostpopular : true,
        id : Date.now(),
        icons : <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M13.121 8.48C12.9335 8.29253 12.6792 8.18722 12.414 8.18722C12.1488 8.18722 11.8945 8.29253 11.707 8.48L11 9.186C10.8155 9.37702 10.5948 9.52939 10.3508 9.63421C10.1068 9.73903 9.84436 9.7942 9.5788 9.7965C9.31324 9.79881 9.04988 9.74821 8.80409 9.64765C8.5583 9.54708 8.335 9.39858 8.14721 9.21079C7.95942 9.02301 7.81092 8.7997 7.71036 8.55391C7.60979 8.30812 7.55919 8.04476 7.5615 7.7792C7.56381 7.51364 7.61898 7.2512 7.7238 7.00719C7.82861 6.76319 7.98098 6.5425 8.172 6.358L13.802 0.726004C15.1349 0.42283 16.5295 0.547602 17.7874 1.08258C19.0454 1.61755 20.1026 2.5355 20.8089 3.7059C21.5151 4.87629 21.8344 6.23955 21.7213 7.60183C21.6082 8.96412 21.0686 10.2561 20.179 11.294L18.071 13.429L13.121 8.479V8.48ZM2.161 2.468C3.19576 1.43338 4.54922 0.777983 6.00256 0.60777C7.4559 0.437557 8.92418 0.762479 10.17 1.53L6.757 4.944C6.0178 5.68173 5.59643 6.6793 5.58294 7.72356C5.56944 8.76782 5.96489 9.77595 6.68478 10.5325C7.40467 11.2891 8.39191 11.7342 9.43555 11.7725C10.4792 11.8109 11.4965 11.4396 12.27 10.738L12.414 10.601L16.657 14.843L12.414 19.086C12.0389 19.4609 11.5303 19.6716 11 19.6716C10.4697 19.6716 9.96106 19.4609 9.586 19.086L2.16 11.66C0.941132 10.441 0.256388 8.78782 0.256388 7.064C0.256388 5.34019 0.941132 3.68697 2.16 2.468H2.161Z" fill="currentColor"/>
         </svg>
        
    },

    {
        title : 'Business',
        currency : 'usd',
        frequency : '/month',
        price : 44,
        description : 'the essentials to provide you the best work for clients',
        feature : [
            'unlimited product',
            'unlimited subscribers',
            'unlimited analytics',
            'unlimited support response time',
            'Making automation'
        ],
        cta : 'start making your trial',
        mostpopular : false,
        id : Date.now(),
        icons : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_74)">
        <path d="M21 20H23V22H1V20H3V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V20ZM19 20V4H5V20H19ZM8 11H11V13H8V11ZM8 7H11V9H8V7ZM8 15H11V17H8V15ZM13 15H16V17H13V15ZM13 11H16V13H13V11ZM13 7H16V9H13V7Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1_74">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>,
        
    },
]

export default Data