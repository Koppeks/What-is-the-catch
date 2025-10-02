import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAliasKindFilterSchema } from './EnumAliasKindFilterSchema';
import { AliasKindSchema } from './AliasKindSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyAliasWhereInputSchema: z.ZodType<Prisma.CompanyAliasWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CompanyAliasWhereInputSchema), z.lazy(() => CompanyAliasWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyAliasWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyAliasWhereInputSchema), z.lazy(() => CompanyAliasWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumAliasKindFilterSchema), z.lazy(() => AliasKindSchema) ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  valueNorm: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyScalarRelationFilterSchema), z.lazy(() => CompanyWhereInputSchema) ]).optional(),
});

export default CompanyAliasWhereInputSchema;
