import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAliasKindFilterSchema } from './EnumAliasKindFilterSchema';
import { AliasKindSchema } from './AliasKindSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CompanyAliasScalarWhereInputSchema: z.ZodType<Prisma.CompanyAliasScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyAliasScalarWhereInputSchema),z.lazy(() => CompanyAliasScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyAliasScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyAliasScalarWhereInputSchema),z.lazy(() => CompanyAliasScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumAliasKindFilterSchema),z.lazy(() => AliasKindSchema) ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  valueNorm: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.CompanyAliasScalarWhereInput>;

export default CompanyAliasScalarWhereInputSchema;
