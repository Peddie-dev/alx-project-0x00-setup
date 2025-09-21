import Card from "@/components/card";
import Button from "@/components/button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Landing Page Buttons</h1>

      {/* Show card above buttons */}
      <Card />

      {/* Small buttons */}
      <div className="flex gap-4">
        <Button title="Small sm" styles="text-sm rounded-sm px-3 py-1" />
        <Button title="Small md" styles="text-sm rounded-md px-3 py-1" />
        <Button title="Small full" styles="text-sm rounded-full px-3 py-1" />
      </div>

      {/* Medium buttons */}
      <div className="flex gap-4">
        <Button title="Medium sm" styles="text-base rounded-sm px-4 py-2" />
        <Button title="Medium md" styles="text-base rounded-md px-4 py-2" />
        <Button title="Medium full" styles="text-base rounded-full px-4 py-2" />
      </div>

      {/* Large buttons */}
      <div className="flex gap-4">
        <Button title="Large sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large md" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
