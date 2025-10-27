import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterCreateWithoutTriggerInputSchema } from './HitterCreateWithoutTriggerInputSchema';
import { HitterUncheckedCreateWithoutTriggerInputSchema } from './HitterUncheckedCreateWithoutTriggerInputSchema';
import { HitterCreateOrConnectWithoutTriggerInputSchema } from './HitterCreateOrConnectWithoutTriggerInputSchema';
import { HitterWhereUniqueInputSchema } from './HitterWhereUniqueInputSchema';

export const HitterCreateNestedOneWithoutTriggerInputSchema: z.ZodType<Prisma.HitterCreateNestedOneWithoutTriggerInput> = z.strictObject({
  create: z.union([ z.lazy(() => HitterCreateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedCreateWithoutTriggerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HitterCreateOrConnectWithoutTriggerInputSchema).optional(),
  connect: z.lazy(() => HitterWhereUniqueInputSchema).optional(),
});

export default HitterCreateNestedOneWithoutTriggerInputSchema;
