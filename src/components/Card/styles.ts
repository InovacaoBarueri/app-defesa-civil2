import styled from 'styled-components'

export const CardContainer = styled.div`
    border-radius: 20px;
    border: 5px solid #000;
    background: #2C2C2C;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1.5rem;
    margin: 1.5rem;
`

export const CardHeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 1fr
`

export const RiskLevelMedium = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FA0;
`

export const RiskLevelHigh = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FF0000;
`

export const RiskLevelLow = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #32CD32;
`

export const RiskLevelInstutional = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #2B41B7;
`


export const RiskLevelText = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin: auto;

    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
`

export const BrankDiv = styled.div`
`


export const CardMainContainer = styled.div`
    margin-top: 1.5rem;
`

export const CardImage = styled.img`
    border-radius: 1.2rem;
`

export const CardTitle = styled.h2`
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export const CardSubTitle = styled.h3`
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.5rem;
`

export const AffectedRegions = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    display: inline-block;
    margin-right: 0.5rem;
`

export const CardAffectedRegions = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: normal;
    display: inline-block;
`