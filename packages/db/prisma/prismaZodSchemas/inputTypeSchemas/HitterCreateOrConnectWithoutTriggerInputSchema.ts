import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HitterWhereUniqueInputSchema } from './HitterWhereUniqueInputSchema';
import { HitterCreateWithoutTriggerInputSchema } from './HitterCreateWithoutTriggerInputSchema';
import { HitterUncheckedCreateWithoutTriggerInputSchema } from './HitterUncheckedCreateWithoutTriggerInputSchema';

export const HitterCreateOrConnectWithoutTriggerInputSchema: z.ZodType<Prisma.HitterCreateOrConnectWithoutTriggerInput> = z.strictObject({
  where: z.lazy(() => HitterWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HitterCreateWithoutTriggerInputSchema), z.lazy(() => HitterUncheckedCreateWithoutTriggerInputSchema) ]),
});

export default HitterCreateOrConnectWithoutTriggerInputSchema;
