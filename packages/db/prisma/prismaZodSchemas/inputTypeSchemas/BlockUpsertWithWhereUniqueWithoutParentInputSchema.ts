import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateWithoutParentInputSchema } from './BlockUpdateWithoutParentInputSchema';
import { BlockUncheckedUpdateWithoutParentInputSchema } from './BlockUncheckedUpdateWithoutParentInputSchema';
import { BlockCreateWithoutParentInputSchema } from './BlockCreateWithoutParentInputSchema';
import { BlockUncheckedCreateWithoutParentInputSchema } from './BlockUncheckedCreateWithoutParentInputSchema';

export const BlockUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.BlockUpsertWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => BlockWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BlockUpdateWithoutParentInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => BlockCreateWithoutParentInputSchema), z.lazy(() => BlockUncheckedCreateWithoutParentInputSchema) ]),
});

export default BlockUpsertWithWhereUniqueWithoutParentInputSchema;
