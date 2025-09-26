import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CompanyCreateWithoutServiceInputSchema } from './CompanyCreateWithoutServiceInputSchema';
import { CompanyUncheckedCreateWithoutServiceInputSchema } from './CompanyUncheckedCreateWithoutServiceInputSchema';
import { CompanyCreateOrConnectWithoutServiceInputSchema } from './CompanyCreateOrConnectWithoutServiceInputSchema';
import { CompanyUpsertWithoutServiceInputSchema } from './CompanyUpsertWithoutServiceInputSchema';
import { CompanyWhereUniqueInputSchema } from './CompanyWhereUniqueInputSchema';
import { CompanyUpdateToOneWithWhereWithoutServiceInputSchema } from './CompanyUpdateToOneWithWhereWithoutServiceInputSchema';
import { CompanyUpdateWithoutServiceInputSchema } from './CompanyUpdateWithoutServiceInputSchema';
import { CompanyUncheckedUpdateWithoutServiceInputSchema } from './CompanyUncheckedUpdateWithoutServiceInputSchema';

export const CompanyUpdateOneRequiredWithoutServiceNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutServiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutServiceInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutServiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutServiceInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutServiceInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutServiceInputSchema),z.lazy(() => CompanyUpdateWithoutServiceInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutServiceInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutServiceNestedInput>;

export default CompanyUpdateOneRequiredWithoutServiceNestedInputSchema;
