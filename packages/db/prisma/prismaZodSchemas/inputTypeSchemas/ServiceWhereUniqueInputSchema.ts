import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceCompanyIdSlugCompoundUniqueInputSchema } from './ServiceCompanyIdSlugCompoundUniqueInputSchema';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { ServiceDomainListRelationFilterSchema } from './ServiceDomainListRelationFilterSchema';

export const ServiceWhereUniqueInputSchema: z.ZodType<Prisma.ServiceWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    companyId_slug: z.lazy(() => ServiceCompanyIdSlugCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    companyId_slug: z.lazy(() => ServiceCompanyIdSlugCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  companyId_slug: z.lazy(() => ServiceCompanyIdSlugCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceWhereInputSchema),z.lazy(() => ServiceWhereInputSchema).array() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyScalarRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.ServiceWhereUniqueInput>;

export default ServiceWhereUniqueInputSchema;
