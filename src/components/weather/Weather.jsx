export default function Weather() {
  // Datos de ejemplo
  const temperature = "25°C";
  const condition = "Sunny";

  return (
    <span className="text-lg flex items-center space-x-1">
      <span>{temperature}</span>
      <span>{condition}</span>
    </span>
  );
}
