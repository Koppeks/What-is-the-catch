import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema } from './CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema';
import { CompanyAliasWhereInputSchema } from './CompanyAliasWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAliasKindFilterSchema } from './EnumAliasKindFilterSchema';
import { AliasKindSchema } from './AliasKindSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CompanyScalarRelationFilterSchema } from './CompanyScalarRelationFilterSchema';
import { CompanyWhereInputSchema } from './CompanyWhereInputSchema';

export const CompanyAliasWhereUniqueInputSchema: z.ZodType<Prisma.CompanyAliasWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    companyId_valueNorm: z.lazy(() => CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    companyId_valueNorm: z.lazy(() => CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  companyId_valueNorm: z.lazy(() => CompanyAliasCompanyIdValueNormCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CompanyAliasWhereInputSchema),z.lazy(() => CompanyAliasWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyAliasWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyAliasWhereInputSchema),z.lazy(() => CompanyAliasWhereInputSchema).array() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kind: z.union([ z.lazy(() => EnumAliasKindFilterSchema),z.lazy(() => AliasKindSchema) ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  valueNorm: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyScalarRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
}).strict()) as z.ZodType<Prisma.CompanyAliasWhereUniqueInput>;

export default CompanyAliasWhereUniqueInputSchema;
