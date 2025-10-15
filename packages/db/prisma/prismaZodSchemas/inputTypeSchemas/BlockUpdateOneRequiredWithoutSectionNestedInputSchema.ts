import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutSectionInputSchema } from './BlockCreateWithoutSectionInputSchema';
import { BlockUncheckedCreateWithoutSectionInputSchema } from './BlockUncheckedCreateWithoutSectionInputSchema';
import { BlockCreateOrConnectWithoutSectionInputSchema } from './BlockCreateOrConnectWithoutSectionInputSchema';
import { BlockUpsertWithoutSectionInputSchema } from './BlockUpsertWithoutSectionInputSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateToOneWithWhereWithoutSectionInputSchema } from './BlockUpdateToOneWithWhereWithoutSectionInputSchema';
import { BlockUpdateWithoutSectionInputSchema } from './BlockUpdateWithoutSectionInputSchema';
import { BlockUncheckedUpdateWithoutSectionInputSchema } from './BlockUncheckedUpdateWithoutSectionInputSchema';

export const BlockUpdateOneRequiredWithoutSectionNestedInputSchema: z.ZodType<Prisma.BlockUpdateOneRequiredWithoutSectionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedCreateWithoutSectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlockCreateOrConnectWithoutSectionInputSchema).optional(),
  upsert: z.lazy(() => BlockUpsertWithoutSectionInputSchema).optional(),
  connect: z.lazy(() => BlockWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlockUpdateToOneWithWhereWithoutSectionInputSchema), z.lazy(() => BlockUpdateWithoutSectionInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutSectionInputSchema) ]).optional(),
});

export default BlockUpdateOneRequiredWithoutSectionNestedInputSchema;
