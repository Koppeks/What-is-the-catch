import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';

export const CompanyAliasCreateManyInputSchema: z.ZodType<Prisma.CompanyAliasCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  companyId: z.string(),
  kind: z.lazy(() => AliasKindSchema),
  value: z.string(),
  valueNorm: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CompanyAliasCreateManyInputSchema;
