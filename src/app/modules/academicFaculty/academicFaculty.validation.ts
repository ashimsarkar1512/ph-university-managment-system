import { z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'AcademicFuculty must be string',
    })
    
});
const updateAcademicFacultyValidationSchema = z.object({
  name: z
    .string({
      invalid_type_error: 'AcademicFuculty must be string',
    })
    
});

export const academicFacultyValidation = {
  createAcademicFacultyValidationSchema,updateAcademicFacultyValidationSchema
};
