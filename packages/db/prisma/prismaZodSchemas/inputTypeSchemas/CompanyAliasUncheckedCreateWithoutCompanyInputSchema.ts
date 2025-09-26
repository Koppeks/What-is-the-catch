import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const CompanyAliasUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => AliasKindSchema),
  value: z.string(),
  valueNorm: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.CompanyAliasUncheckedCreateWithoutCompanyInput>;

export default CompanyAliasUncheckedCreateWithoutCompanyInputSchema;
