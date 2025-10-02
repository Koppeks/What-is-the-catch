import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const CompanyAliasUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyAliasUncheckedCreateWithoutCompanyInput> = z.strictObject({
  id: z.cuid().optional(),
  kind: z.lazy(() => AliasKindSchema),
  value: z.string(),
  valueNorm: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CompanyAliasUncheckedCreateWithoutCompanyInputSchema;
