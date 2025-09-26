import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AliasKindSchema } from './AliasKindSchema';
import { CompanyCreateNestedOneWithoutCompanyAliasInputSchema } from './CompanyCreateNestedOneWithoutCompanyAliasInputSchema';

export const CompanyAliasCreateInputSchema: z.ZodType<Prisma.CompanyAliasCreateInput> = z.object({
  id: z.string().cuid().optional(),
  kind: z.lazy(() => AliasKindSchema),
  value: z.string(),
  valueNorm: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCompanyAliasInputSchema)
}).strict() as z.ZodType<Prisma.CompanyAliasCreateInput>;

export default CompanyAliasCreateInputSchema;
