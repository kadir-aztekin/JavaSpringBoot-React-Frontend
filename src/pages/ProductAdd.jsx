import React from "react";
import { Formik, Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice:10 };

  const schema = Yup.object({
    productName: Yup.string().required("Zorunlu Ürün Adı"),
    unitPrice: Yup.number().required("Ürün Fiyatı Zorunludur"),
  });

  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema} 
      onSubmit={(values)=>{console.log(values)}}>

        <Form className="ui form">
          <FormField>
            <Field name="productName" placeholder="Ürün Adı" ></Field>
            <ErrorMessage name="productName" render={error=>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>
          <FormField>
          <Field name="unitPrice" placeholder="Ürün Fiyatı" ></Field>
          <ErrorMessage name="unitPrice" render={error=>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>
          <Button color="green" type="submit">Ürün Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
