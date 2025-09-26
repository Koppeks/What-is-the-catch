import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { ServiceDomainListRelationFilterSchema } from './ServiceDomainListRelationFilterSchema';

export const DomainWhereInputSchema: z.ZodType<Prisma.DomainWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DomainWhereInputSchema),z.lazy(() => DomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DomainWhereInputSchema),z.lazy(() => DomainWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  host: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyScalarRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.DomainWhereInput>;

export default DomainWhereInputSchema;
