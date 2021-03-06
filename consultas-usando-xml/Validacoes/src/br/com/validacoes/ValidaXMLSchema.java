package br.com.validacoes;

import java.io.File;

import java.io.File;

import javax.xml.XMLConstants;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;
import javax.xml.validation.Validator;

public class ValidaXMLSchema {
	
	public static void main(String[] args) throws Exception {
		valida(new File("pedido.xml"), new File("pedido.xsd"));
	}
	
	public static void valida(File xml, File xsd) throws Exception{
		Source schemaFile = new StreamSource(xsd);
		Source xmlFile = new StreamSource(xml);
		SchemaFactory schemaFactory = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
		Schema schema = schemaFactory.newSchema(schemaFile);
		Validator validator = schema.newValidator();
		validator.validate(xmlFile);
	}


}
