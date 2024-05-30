// import { useState } from 'react';
import { useState } from 'react'
import img from '../assets/anoucement.svg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function DateTab() {
    const [month, setMonth] = useState(today.getMonth())
    const today = new Date()
    const day_month = today.toLocaleString('en-EN',
        {
            month: 'long',
            day: 'numeric'
        }
    )
    const dayInMonths = (m) => {
        return new Date(today.getFullYear(), m, 0).getDate()
    }
    dayInMonths(month)
    return (
        <Tabs Tabs
            id="fill-tab-example"
            defaultActiveKey={day_month}
            activeKey={date}
            onSelect={(d) => setDate(d)
            }
            className="mb-3 mt-3"
        >
            <Tab eventKey={day_month} title={day_month}>
                Tab content for {day_month}
            </Tab>

        </Tabs >
    )
}

export default function HomePage() {
    // const [courts, setCourts] = useState(0)
    return (
        <>
            {/* Image */}
            <div className="row mt-2">
                <div className="col">
                    <img src={img} className="img-fluid"></img>
                </div>
            </div>
            {/*  */}

            {/* Date */}
            <div className="container">
                <DateTab />
            </div>

            {/*  */}
        </>
    )
}