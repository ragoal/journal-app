import React from 'react'

export const JournalEntry = (value) => {
    return (
        <div className="journal__entry pointer  ">
           <div 
                className="journal__entry-picture"
                style={{
                        backgroundSize:'cover',
                        backgroundImage:'url(https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/sky+photo+for+website+home+page.jpeg?format=2500w)'
                    }}

           >
           </div>
           <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Nostrud dolore cupidatat laborum velit culpa incididunt veniam do consequat do esse.
                </p>
           </div>
           <div className="journal__entry-date-box">
                <span>
                    Monday
                </span>
                <h4>28</h4>

           </div>
        </div>
    )
}
