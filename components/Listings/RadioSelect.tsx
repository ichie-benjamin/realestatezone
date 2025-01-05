import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useSearchParamHandler from "@/hooks/useSearchParamsHandler";

function RadioSelect() {
  const { getParam, setParam } = useSearchParamHandler();

  const initialValue = getParam("all", "");

  const handleRadioChange = (value: string) => {
    setParam("all", value);
  };

  return (
    <>
      <RadioGroup
        className="mt-5"
        value={initialValue}
        onValueChange={handleRadioChange}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="r1" />
          <Label htmlFor="r1">All</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="buy" id="r2" />
          <Label htmlFor="r2">Buy</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="rent" id="r3" />
          <Label htmlFor="r3">Rent</Label>
        </div>
      </RadioGroup>
    </>
  );
}

export default RadioSelect;
