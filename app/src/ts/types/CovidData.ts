export type TCovidData = {
    id: string;
    rank: number;
    Country: string;
    Continent: string;
    TwoLetterSymbol?: any;
    ThreeLetterSymbol?: any;
    Infection_Risk: number;
    Case_Fatality_Rate: number;
    Test_Percentage: number;
    Recovery_Proporation: number;
    TotalCases: number;
    NewCases: number;
    TotalDeaths: number;
    NewDeaths: number;
    TotalRecovered: string;
    NewRecovered: number;
    ActiveCases: number;
    TotalTests: string;
    Population: string;
    one_Caseevery_X_ppl: number;
    one_Deathevery_X_ppl: number;
    one_Testevery_X_ppl: number;
    Deaths_1M_pop: number;
    Serious_Critical: number;
    Tests_1M_Pop: number;
    TotCases_1M_Pop: number;
  };
  