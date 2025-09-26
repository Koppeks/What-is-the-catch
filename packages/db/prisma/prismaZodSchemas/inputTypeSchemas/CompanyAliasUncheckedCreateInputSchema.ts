import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const CompanyAliasUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyAliasUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  companyId: z.string(),
  kind: z.lazy(() => AliasKindSchema),
  value: z.string(),
  valueNorm: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.CompanyAliasUncheckedCreateInput>;

export default CompanyAliasUncheckedCreateInputSchema;
