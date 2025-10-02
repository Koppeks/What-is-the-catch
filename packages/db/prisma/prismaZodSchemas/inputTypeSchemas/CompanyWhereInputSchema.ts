import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ServiceListRelationFilterSchema } from './ServiceListRelationFilterSchema';
import { CompanyAliasListRelationFilterSchema } from './CompanyAliasListRelationFilterSchema';
import { DomainListRelationFilterSchema } from './DomainListRelationFilterSchema';

export const CompanyWhereInputSchema: z.ZodType<Prisma.CompanyWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema), z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema), z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  displayName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  websiteUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  countryCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  Service: z.lazy(() => ServiceListRelationFilterSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasListRelationFilterSchema).optional(),
  Domain: z.lazy(() => DomainListRelationFilterSchema).optional(),
});

export default CompanyWhereInputSchema;
