import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumAliasKindWithAggregatesFilterSchema } from './EnumAliasKindWithAggregatesFilterSchema';
import { AliasKindSchema } from './AliasKindSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CompanyAliasScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompanyAliasScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CompanyAliasScalarWhereWithAggregatesInputSchema), z.lazy(() => CompanyAliasScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyAliasScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyAliasScalarWhereWithAggregatesInputSchema), z.lazy(() => CompanyAliasScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumAliasKindWithAggregatesFilterSchema), z.lazy(() => AliasKindSchema) ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  valueNorm: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default CompanyAliasScalarWhereWithAggregatesInputSchema;
