import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Fragment } from "react/jsx-runtime";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Crete your menu and give each item a name and a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={() => (
          <FormItem className="flex-1">
            {fields.map((_, index) => (
              <Fragment key={index}>
                <MenuItemInput
                  index={index}
                  removeMenuItem={() => remove(index)}
                />
              </Fragment>
            ))}
          </FormItem>
        )}
      />
      <Button type="button" onClick={() => append({ name: "", pirce: "" })}>
        Add Menu Item
      </Button>
    </div>
  );
};

export default MenuSection;
