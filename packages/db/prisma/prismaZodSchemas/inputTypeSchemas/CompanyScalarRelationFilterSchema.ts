import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyScalarRelationFilterSchema: z.ZodType<Prisma.CompanyScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => CompanyWhereInputSchema).optional(),
  isNot: z.lazy(() => CompanyWhereInputSchema).optional(),
});

export default CompanyScalarRelationFilterSchema;
