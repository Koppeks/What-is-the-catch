import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ServiceListRelationFilterSchema } from './ServiceListRelationFilterSchema';
import { CompanyAliasListRelationFilterSchema } from './CompanyAliasListRelationFilterSchema';
import { DomainListRelationFilterSchema } from './DomainListRelationFilterSchema';

export const CompanyWhereUniqueInputSchema: z.ZodType<Prisma.CompanyWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  displayName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  websiteUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  countryCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Service: z.lazy(() => ServiceListRelationFilterSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasListRelationFilterSchema).optional(),
  Domain: z.lazy(() => DomainListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.CompanyWhereUniqueInput>;

export default CompanyWhereUniqueInputSchema;
