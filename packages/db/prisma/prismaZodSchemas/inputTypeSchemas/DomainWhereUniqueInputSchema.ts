import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { ServiceDomainListRelationFilterSchema } from './ServiceDomainListRelationFilterSchema';

export const DomainWhereUniqueInputSchema: z.ZodType<Prisma.DomainWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    host: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    host: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  host: z.string().optional(),
  AND: z.union([ z.lazy(() => DomainWhereInputSchema),z.lazy(() => DomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DomainWhereInputSchema),z.lazy(() => DomainWhereInputSchema).array() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyScalarRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.DomainWhereUniqueInput>;

export default DomainWhereUniqueInputSchema;
