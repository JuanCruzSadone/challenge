import DailyCardContainer from "./styles";

const DailyWeatherCard = ({
  date,
  temp,
  sky,
}: {
  date: string;
  temp: number;
  sky: string;
}): JSX.Element => {
  const parseDate = (str: string) => {
    const date = new Date(str);
    return date.toDateString().slice(0, 3);
  };

  return (
    <DailyCardContainer>
      <h3>{parseDate(date)}</h3>
      <h2>{Math.trunc(temp) + "°"}</h2>
      <span>{sky}</span>
    </DailyCardContainer>
  );
};

export default DailyWeatherCard;
