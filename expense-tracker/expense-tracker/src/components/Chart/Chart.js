import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaxValue = Math.max(...dataPointsValues)

    console.log(dataPointsValues)
    console.log(totalMaxValue)
    console.log(props.dataPoints)

    return (
        <div className='chart'>
        {props.dataPoints.map(data => (
            <ChartBar
                key={data.label}
                maxValue={totalMaxValue}
                value={data.value}
                label={data.label}
            />
            ))
        }
        </div>
    )

}

export default Chart;