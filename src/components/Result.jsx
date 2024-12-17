import { calculateInvestmentResults,formatter } from "../util/investment"

export default function Result({inputs}){
    const results = calculateInvestmentResults(inputs);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;    

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Values</th>
                <th>Intrest Year</th>
                <th>Total Intrest</th>
                <th>Intersted Capital</th>
            </tr>
            <tbody>
               {results.map((item,resultIndex) =>
               {
               const totalIntrest = item.valueEndOfYear - item.annualInvestment - item.year - initialInvestment;
               const totalAmountInvested = item.valueEndOfYear - totalIntrest;
              return  <tr>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
             </tr>
 } )}
            </tbody>
        </thead>

    </table>
}