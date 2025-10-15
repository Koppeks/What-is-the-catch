import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockCreateWithoutChildrenInputSchema } from './BlockCreateWithoutChildrenInputSchema';
import { BlockUncheckedCreateWithoutChildrenInputSchema } from './BlockUncheckedCreateWithoutChildrenInputSchema';
import { BlockCreateOrConnectWithoutChildrenInputSchema } from './BlockCreateOrConnectWithoutChildrenInputSchema';
import { BlockUpsertWithoutChildrenInputSchema } from './BlockUpsertWithoutChildrenInputSchema';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';
import { BlockWhereUniqueInputSchema } from './BlockWhereUniqueInputSchema';
import { BlockUpdateToOneWithWhereWithoutChildrenInputSchema } from './BlockUpdateToOneWithWhereWithoutChildrenInputSchema';
import { BlockUpdateWithoutChildrenInputSchema } from './BlockUpdateWithoutChildrenInputSchema';
import { BlockUncheckedUpdateWithoutChildrenInputSchema } from './BlockUncheckedUpdateWithoutChildrenInputSchema';

export const BlockUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.BlockUpdateOneWithoutChildrenNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BlockCreateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BlockCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => BlockUpsertWithoutChildrenInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BlockWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BlockWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BlockWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BlockUpdateToOneWithWhereWithoutChildrenInputSchema), z.lazy(() => BlockUpdateWithoutChildrenInputSchema), z.lazy(() => BlockUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
});

export default BlockUpdateOneWithoutChildrenNestedInputSchema;
